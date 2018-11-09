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
  public ninio:any={
    ninio:null,
    peso_nacimiento:null,
    fecha_nacimiento:null,
    id_tipo_peso:null,
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
    this.getTiposPeso();
    this.getGeneros();
    this.getMadres();
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
  async saveNino(){
    this.ninio.fecha_nacimiento = new Date(this.ninio.fechaNacimiento.year.value,+this.ninio.fechaNacimiento.month.value-1,this.ninio.fechaNacimiento.day.value);
    if(+this.route.snapshot.paramMap.get('id') > 0){
      /*const loading = await this.loadingController.create({
        message: 'Actualizando Congelador',
      });
      await loading.present();
      await this.api.updateCongelador(this.route.snapshot.paramMap.get('id'),this.congelador)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });*/
    }else{
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
