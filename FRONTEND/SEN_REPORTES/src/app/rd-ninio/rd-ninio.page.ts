import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-rd-ninio',
  templateUrl: './rd-ninio.page.html',
  styleUrls: ['./rd-ninio.page.scss'],
})
export class RdNinioPage implements OnInit {
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
