import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-rd-madre',
  templateUrl: './rd-madre.page.html',
  styleUrls: ['./rd-madre.page.scss'],
})
export class RdMadrePage implements OnInit {
  public madres;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
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
