import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-contenidos-congelador-cu',
  templateUrl: './contenidos-congelador-cu.page.html',
  styleUrls: ['./contenidos-congelador-cu.page.scss'],
})
export class ContenidosCongeladorCUPage implements OnInit {
  almacenes;
  congeladoresAlmacen;
  idAlmacen;
  idCongelador;
  idUnidad;
  unidades;
  cantidadMaxima;
  congeladorTemp;
  unidadTemp;
  unidadCongelador;
  congelador;
  tc_almacen_id:'';
  tc_unidades_id : '';
  tc_congelador_id : '';
  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.getUnidades();
    this.getAlmacenes();
    this.unidadCongelador =  {
      currentAlmacen:'',
      currentCongelador:'',
      currentUnidad:'',
      almacen:{},
      congelador:{},
      unidad:{},
      cantidadMaxima : 0
    }

    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getUnidadCongelador(this.route.snapshot.paramMap.get('id'));
    }else{

    }
   }

  ngOnInit() {
    
  }
  async getUnidadCongelador(id) {
    const loading = await this.loadingController.create({
      message: 'Unidad Congelador',
    });
    await loading.present();
    await this.api.getContenidoCongeladoresById(id)
      .subscribe(res => {
        this.cantidadMaxima = res[0].cantidadMaxima;
        //Aquí obtengo el id y nombre de la unidad
        this.unidadCongelador.unidad = res[0].tc_unidad;
        this.calculaUnidad();
        //Aquí obtengo el id y nombre del congelador
        this.unidadCongelador.congelador = res[0].tc_congelador;
        loading.dismiss();
        this.getCongelador(res[0].tc_congelador.id);
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getAlmacenes() {
    const loading = await this.loadingController.create({
      message: 'Almacenes',
    });
    await loading.present();
    await this.api.getAlmacen()
      .subscribe(res => {
        this.almacenes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  
  async getCongelador(id) {
    const loading = await this.loadingController.create({
      message: 'Congelador',
    });
    await loading.present();
    await this.api.getCongeladorById(id)
      .subscribe(res => {
        //Obtengo el id y nombre de un congelador más su almacen
        this.congelador = res[0];
        this.unidadCongelador.almacen = this.congelador.tc_almacen;
        this.unidadCongelador.currentCongelador = this.congelador.nombre;  
        this.unidadCongelador.currentAlmacen = this.unidadCongelador.almacen.nombre;
        loading.dismiss();
        this.obtenerCongelagores();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async obtenerCongelagores() {
    const loading = await this.loadingController.create({
      message: 'Congeladores Almacen',
    });
    await loading.present();
    await this.api.getCongeladoresAlmacen(this.unidadCongelador.almacen.id)
      .subscribe(res => {
        this.congeladoresAlmacen = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getCongeladores() {
    if(this.unidadCongelador.almacen.id == undefined){
      const loading = await this.loadingController.create({
        message: 'Congeladores Almacen',
      });
      await loading.present();
      await this.api.getCongeladoresAlmacen(this.tc_almacen_id)
        .subscribe(res => {
          console.log(res);
          this.congeladoresAlmacen = res;
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }else{
      const loading = await this.loadingController.create({
        message: 'Congeladores Almacen',
      });
      await loading.present();
      await this.api.getCongeladoresAlmacen(this.unidadCongelador.almacen.id)
        .subscribe(res => {
          console.log(res);
          this.congeladoresAlmacen = res;
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }
  }
  async getUnidades() {
    const loading = await this.loadingController.create({
      message: 'Unidades',
    });
    await loading.present();
    await this.api.getUnidades()
      .subscribe(res => {
        this.unidades = res;
        loading.dismiss();
        this.calculaUnidad();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


  async saveContenidoCongelador(){
    var componente = {
      tc_congelador_id : this.tc_congelador_id,
      tc_unidades_id : this.tc_unidades_id,
      cantidadMaxima : this.cantidadMaxima
    }
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Unidad Congelador',
      });
      await loading.present();
      await this.api.updateContenidoCongeladores(this.route.snapshot.paramMap.get('id'),componente)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando Contenido',
      });
      await loading.present();
      await this.api.postContenidoCongeladores(componente)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }
  }
  private calculaUnidad(){
    for(var i in this.unidades){
      if(this.unidades[i].id == this.unidadCongelador.unidad.id){
        this.unidadCongelador.currentUnidad = this.unidadCongelador.unidad.unidad;
        this.unidadCongelador.tc_unidades_id = this.unidades[i].id;
      }
    }
  }
}
