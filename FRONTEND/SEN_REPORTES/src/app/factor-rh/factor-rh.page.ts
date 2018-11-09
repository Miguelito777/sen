import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-factor-rh',
  templateUrl: './factor-rh.page.html',
  styleUrls: ['./factor-rh.page.scss'],
})
export class FactorRhPage implements OnInit {
  factoresRh: any;
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
      message: 'Factores RH',
    });
    await loading.present();
    await this.api.getFactorRh()
      .subscribe(res => {
        console.log(res);
        this.factoresRh = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteFactorRh(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteFactorRh(id)
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
