import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.page.html',
  styleUrls: ['./unidad.page.scss'],
})
export class UnidadPage implements OnInit {
  unidades: any;
  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getFactoresRh();
  }
  async getFactoresRh() {
    const loading = await this.loadingController.create({
      message: 'Unidades',
    });
    await loading.present();
    await this.api.getUnidades()
      .subscribe(res => {
        console.log(res);
        this.unidades = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteUnidad(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteUnidades(id)
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
