import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-contenidos-congelador',
  templateUrl: './contenidos-congelador.page.html',
  styleUrls: ['./contenidos-congelador.page.scss'],
})
export class ContenidosCongeladorPage implements OnInit {
  almacenes;
  congeladoresAlmacen;
  unidadesCongelador;
  idAlmacen;
  idCongelador;
  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAlmacenes();
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
  async getCongeladores() {
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
  async getUnidades() {
    const loading = await this.loadingController.create({
      message: 'Unidades Congelador',
    });
    await loading.present();
    await this.api.getUnidadesCongeladorById(this.idCongelador)
      .subscribe(res => {
        console.log(res);
        this.unidadesCongelador = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async deleteUnidadCongelador(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteContenidoCongeladores(id)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();
        this.router.navigate(['/Catalogos']);
        //this.gruposSanguineos = res;
      }, err => {
        this.router.navigate(['/Catalogos']);
        console.log(err);
        loading.dismiss();
      });
  }

}
