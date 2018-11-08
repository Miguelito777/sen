import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-salida-sangre',
  templateUrl: './salida-sangre.page.html',
  styleUrls: ['./salida-sangre.page.scss'],
})
export class SalidaSangrePage implements OnInit {
  tiposSangre;
  tipoSalida;
  tc_tipo_sangre_id_tipo_sangre;
  cantidad;
  unidad;
  sangre;
  sangreDisponible;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
  ) {
    this.sangre = {

    }
   }

  ngOnInit() {
    this.getTiposSangre();
  }
  async getTiposSangre() {
    const loading = await this.loadingController.create({
      message: 'Tipos de Sangre',
    });
    await loading.present();
    await this.api.getTiposSangre()
      .subscribe(res => {
        console.log(res);
        this.tiposSangre = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  getUnidad(){
    for(var i in this.tiposSangre){
      if(this.tiposSangre[i].id == this.tc_tipo_sangre_id_tipo_sangre){
        this.unidad = this.tiposSangre[i].tc_unidad.unidad;
        this.sangre.tc_unidades_id_unidades = this.tiposSangre[i].tc_unidad.id;
      }
    }
  }
  async searchSangre() {
    const loading = await this.loadingController.create({
      message: 'Buscando Sangre',
    });
    await loading.present();
    await this.api.getSangreInventario(this.cantidad,this.sangre.tc_unidades_id_unidades,this.tc_tipo_sangre_id_tipo_sangre)
      .subscribe(res => {
        console.log(res);
        this.sangreDisponible = res[0];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async UpdateInventario(){
    var sangre = {
      cantidad : +this.cantidad
    }
    const loading = await this.loadingController.create({
      message: 'Actualizando Inventario ',
    });
    await loading.present();
    await this.api.updateInventario(this.sangreDisponible.id,sangre)
    .subscribe(res => {
      console.log(res);
      loading.dismiss();  
      //let id = res['id'];
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }
}
