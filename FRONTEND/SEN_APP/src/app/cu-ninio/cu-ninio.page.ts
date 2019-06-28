import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-cu-ninio',
  templateUrl: './cu-ninio.page.html',
  styleUrls: ['./cu-ninio.page.scss'],
})
export class CuNinioPage implements OnInit {
  new:boolean=true;
  public ninio:any={
    ninio:null,
    peso_nacimiento:0,
    peso_nacimiento_libras:0,
    fecha_nacimiento:null,
    id_tipo_peso:1,
    id_genero:null,
    id_madre:null,
    fechaNacimiento:null
  };
  public tiposPeso;
  public generos;
  public madres;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.new = false;
      this.getNinio(this.route.snapshot.paramMap.get('id'));
    }
    this.getTiposPeso();
    this.getGeneros();
    this.getMadres();
  }
  async getNinio(id) {
    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    await this.api.getNinio(id)
      .subscribe(res => {
        this.ninio = res[0];
        this.ninio.peso_nacimiento_libras = this.ninio.peso_nacimiento / 0.45;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getTiposPeso() {
    const loading = await this.loadingController.create({
      message: 'Tipos Peso',
    });
    await loading.present();
    await this.api.getTipoPeso()
      .subscribe(res => {
        this.tiposPeso = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getGeneros() {
    const loading = await this.loadingController.create({
      message: 'Generos',
    });
    await loading.present();
    await this.api.getGeneros()
      .subscribe(res => {
        this.generos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getMadres() {
    const loading = await this.loadingController.create({
      message: 'Madres',
    });
    await loading.present();
    await this.api.getMadres()
      .subscribe(res => {
        this.madres = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  calcularPesoNacimiento(row){
    this.ninio.peso_nacimiento = +row * 0.45;
  }
  async saveNino(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      if(this.ninio.fechaNacimiento == undefined){
        let dateTemp = this.ninio.fecha_nacimiento.split('-');
        dateTemp = dateTemp[0]+'-'+dateTemp[1]+'-'+(+dateTemp[2]);
        this.ninio.fecha_nacimiento = new Date(dateTemp);        
      }else{
        this.ninio.fecha_nacimiento = new Date(this.ninio.fechaNacimiento.year.value,+this.ninio.fechaNacimiento.month.value-1,this.ninio.fechaNacimiento.day.value);
      };
      const loading = await this.loadingController.create({
        message: 'Actualizando Ninio',
      });
      await loading.present();
      await this.api.updateNinio(this.route.snapshot.paramMap.get('id'),this.ninio)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }else{
      this.ninio.fecha_nacimiento = new Date(this.ninio.fechaNacimiento.year.value,+this.ninio.fechaNacimiento.month.value-1,this.ninio.fechaNacimiento.day.value);
      const loading = await this.loadingController.create({
        message: 'Guardando Nino',
      });
      await loading.present();
      await this.api.insNinio(this.ninio)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }
  }
}
