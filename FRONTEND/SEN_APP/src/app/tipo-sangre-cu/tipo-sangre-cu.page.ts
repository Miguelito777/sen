import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-tipo-sangre-cu',
  templateUrl: './tipo-sangre-cu.page.html',
  styleUrls: ['./tipo-sangre-cu.page.scss'],
})
export class TipoSangreCUPage implements OnInit {
  tipoSangre:any;
  gruposSanguineos:any;
  factoresRh:any;
  unidades:any;

  tc_grupo_sanguineo_id_grupo_sanguineo:'';
  tc_factor_rh_id_factor_rh:'';
  tc_unidades_id_unidades:'';
  descripcion_tipo_sangre:'';

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.tipoSangre = {  
      cantidad_minima:0
    }

    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getTipoSangre(this.route.snapshot.paramMap.get('id'));
    }else{
      this.getGruposSanguineos();
      this.getFactoresRh();
      this.getUnidades();
    }
  }

  ngOnInit() {
  }
  async getGruposSanguineos() {
    const loading = await this.loadingController.create({
      message: 'Grupos Sanguineos',
    });
    await loading.present();
    await this.api.getGrupoSanguineo()
      .subscribe(res => {
        this.getFactoresRh();
        this.gruposSanguineos = res;
        console.log(this.gruposSanguineos);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getFactoresRh() {
    const loading = await this.loadingController.create({
      message: 'Factores RH',
    });
    await loading.present();
    await this.api.getFactorRh()
      .subscribe(res => {
        this.getUnidades();
        console.log(res);
        this.factoresRh = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getUnidades() {
    const loading = await this.loadingController.create({
      message: 'Unidades',
    });
    await loading.present();
    await this.api.getUnidades()
      .subscribe(res => {
        console.log(res);
        this.unidades = res;
        loading.dismiss();


        /*for(var i in this.gruposSanguineos){
          if(this.gruposSanguineos[i].id == this.tipoSangre.tc_grupo_sanguineo.id){
            this.gruposSanguineos[i].current = true;
            this.tipoSangre.tc_grupo_sanguineo_id_grupo_sanguineo = this.gruposSanguineos[i].id;
          }
        }*/

        /*for(var i in this.factoresRh){
          if(this.factoresRh[i].id == this.tipoSangre.tc_factor_rh.id){
            this.factoresRh[i].current = true;
            this.tipoSangre.tc_factor_rh_id_factor_rh = this.factoresRh[i].id;
          }
        }*/

        /*for(var i in this.unidades){
          if(this.unidades[i].id == this.tipoSangre.tc_unidad.id){
            this.unidades[i].current = true;
            this.tipoSangre.tc_unidades_id_unidades = this.unidades[i].id;
          }
        }*/

      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async saveTipoSangre(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      /*const loading = await this.loadingController.create({
        message: 'Actualizando Almacen ',
      });
      await loading.present();
      await this.api.updateAlmacen(this.route.snapshot.paramMap.get('id'),this.almacen)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });*/
    }else{
      this.tipoSangre.tc_grupo_sanguineo_id_grupo_sanguineo = this.tc_grupo_sanguineo_id_grupo_sanguineo;
      this.tipoSangre.tc_factor_rh_id_factor_rh = this.tc_factor_rh_id_factor_rh;
      this.tipoSangre.tc_unidades_id_unidades = this.tc_unidades_id_unidades;
      this.tipoSangre.descripcion_tipo_sangre = this.descripcion_tipo_sangre;
      const loading = await this.loadingController.create({
        message: 'Guardando Tipo Sangre',
      });
      await loading.present();
      await this.api.postTipoSangre(this.tipoSangre)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }
  }

  async getTipoSangre(id) {
    const loading = await this.loadingController.create({
      message: 'Almacen',
    });
    await loading.present();
    await this.api.getTipoSangreById(id)
      .subscribe(res => {
        this.getGruposSanguineos();
        
        
        console.log(res);
        this.tipoSangre = res[0];
        
        
        




        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
