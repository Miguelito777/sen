import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-rd-evaluacion',
  templateUrl: './rd-evaluacion.page.html',
  styleUrls: ['./rd-evaluacion.page.scss'],
})
export class RdEvaluacionPage implements OnInit {
  public ninios;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getNinios();
  }
  async getNinios() {
    const loading = await this.loadingController.create({
      message: 'Ninios',
    });
    await loading.present();
    await this.api.getNinios()
      .subscribe(res => {
        this.ninios = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


}
