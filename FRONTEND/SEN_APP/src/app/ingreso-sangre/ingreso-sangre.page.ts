import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-ingreso-sangre',
  templateUrl: './ingreso-sangre.page.html',
  styleUrls: ['./ingreso-sangre.page.scss'],
})
export class IngresoSangrePage implements OnInit {
  
  donantes:any;
  sangre:any;
  factorRH:any;
  grupoSanguineo:any;
  idDonante;
  unidad;
  almacenes;
  idAlmacen;
  congeladoresAlmacen;
  tc_congelador_id;
  unidadCongelador;

  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) {
    this.sangre = {
      tc_tipo_sangre_id : 0
    }
    this.grupoSanguineo = {
      grupo_sanguineo:''
    }
    this.factorRH = {
      factor_rh:''
    }
    this.unidad = {
      unidad : ''
    }
   }

  ngOnInit() {
    this.getDonantes();
    this.getAlmacenes();
  }

  async getDonantes() {
    const loading = await this.loadingController.create({
      message: 'Donantes',
    });
    await loading.present();
    await this.api.getDonantes()
      .subscribe(res => {
        console.log(res);
        this.donantes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  getTipoSangredata (){
    for(var i in this.donantes){
      if(this.idDonante == this.donantes[i].id){
        this.unidad = this.donantes[i].tc_tipo_sangre.tc_unidades_id_unidades;
        this.sangre.tc_tipo_sangre_id = this.donantes[i].tc_tipo_sangre.id; 
        this.getUnidad(this.donantes[i].tc_tipo_sangre.tc_unidades_id_unidades);
        this.getFactorRh(this.donantes[i].tc_tipo_sangre.tc_factor_rh_id_factor_rh);
        this.getGrupoSanguineo(this.donantes[i].tc_tipo_sangre.tc_grupo_sanguineo_id_grupo_sanguineo);
        
      }
    }
  }
  async getFactorRh(id) {
    const loading = await this.loadingController.create({
      message: 'Factor Rh',
    });
    await loading.present();
    await this.api.getFactorRhId(id)
      .subscribe(res => {
        console.log(res);
        this.factorRH = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getGrupoSanguineo(id) {
    const loading = await this.loadingController.create({
      message: 'Grupo Sanguineo',
    });
    await loading.present();
    await this.api.getGrupoSanguineoById(id)
      .subscribe(res => {
        console.log(res);
        this.grupoSanguineo = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getUnidad(id) {
    const loading = await this.loadingController.create({
      message: 'Unidad',
    });
    await loading.present();
    await this.api.getUnidadesById(id)
      .subscribe(res => {
        console.log(res);
        this.unidad = res;
        loading.dismiss();
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
        console.log(res);
        this.almacenes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getCongeladores(){
    const loading = await this.loadingController.create({
      message: 'Congeladores Almacen',
    });
    await loading.present();
    await this.api.getCongeladoresAlmacen(this.idAlmacen)
      .subscribe(res => {
        console.log(res);
        this.congeladoresAlmacen = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getUnidadCongelador(){
    const loading = await this.loadingController.create({
      message: 'Unidad Congelador',
    });
    await loading.present();
    await this.api.getUnidadCongeladorById(this.unidad.id,this.tc_congelador_id)
      .subscribe(res => {
        console.log(res);
        this.sangre.tt_unidad_congelador_id = res[0].id;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  //getUnidadesCongeladorById
  async ingresarSangre(){
    this.sangre.fecha_vencimiento = new Date(this.sangre.fechaVencimiento.year.value,+this.sangre.fechaVencimiento.month.value-1,this.sangre.fechaVencimiento.day.value);
    this.sangre.ts_tipo_movimiento_id = 1;
    const loading = await this.loadingController.create({
      message: 'Registrando Ingreso',
    });
    await loading.present();
    await this.api.postSangreInventario(this.sangre)
    .subscribe(res => {
      loading.dismiss();  
      //let id = res['id'];
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
    
  }
}
