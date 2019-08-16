import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-rd-evaluacion-madre',
  templateUrl: './rd-evaluacion-madre.page.html',
  styleUrls: ['./rd-evaluacion-madre.page.scss'],
})
export class RdEvaluacionMadrePage implements OnInit {
  public madres;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getMadres();
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

}
