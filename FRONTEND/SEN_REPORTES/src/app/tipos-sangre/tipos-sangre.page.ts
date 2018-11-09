import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-tipos-sangre',
  templateUrl: './tipos-sangre.page.html',
  styleUrls: ['./tipos-sangre.page.scss'],
})
export class TiposSangrePage implements OnInit {
  tiposSangre: any;

  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

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
  async deleteTipoSangre(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteTipoSangre(id)
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
