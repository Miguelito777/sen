import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-cu-madre',
  templateUrl: './cu-madre.page.html',
  styleUrls: ['./cu-madre.page.scss'],
})
export class CuMadrePage implements OnInit {
  public madre:any={
    madre:null,
    direccion:null,
    telefono:null,
    cui:null,
    id_municipio:null,
    id_idioma:null,
    id_parroquia:null,
    id_nivel_academico:null
  };
  public municipios;
  public idiomas;
  public parroquias;
  public nivelesAcademicos;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {     
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getMadre(this.route.snapshot.paramMap.get('id'));
    }else{
      /*this.almacen = {
        nombre:''
      }*/
    }
  }

  ngOnInit() {
    this.getMunicipios(2);
    this.getParroquias();
    this.getNivelesAcademicos();
    this.getIdiomas();
  }
  async getMunicipios(id) {
    const loading = await this.loadingController.create({
      message: 'Municipios',
    });
    await loading.present();
    await this.api.getMunicipios(id)
      .subscribe(res => {
        this.municipios = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getIdiomas() {
    const loading = await this.loadingController.create({
      message: 'Idiomas',
    });
    await loading.present();
    await this.api.getIdiomas()
      .subscribe(res => {
        this.idiomas = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getParroquias() {
    const loading = await this.loadingController.create({
      message: 'Parroquias',
    });
    await loading.present();
    await this.api.getParroquias()
      .subscribe(res => {
        this.parroquias = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getNivelesAcademicos() {
    const loading = await this.loadingController.create({
      message: 'Niveles Academicos',
    });
    await loading.present();
    await this.api.getNivelesAcademicos()
      .subscribe(res => {
        this.nivelesAcademicos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async saveMadre(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Madre',
      });
      await loading.present();
      await this.api.updateMadre(this.route.snapshot.paramMap.get('id'),this.madre)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando Madre',
      });
      await loading.present();
      await this.api.insMadre(this.madre)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }
  }
  async getMadre(id) {
    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    await this.api.getMadre(id)
      .subscribe(res => {
        this.madre = res[0];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
