import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-donantes-nivel-reserva',
  templateUrl: './donantes-nivel-reserva.page.html',
  styleUrls: ['./donantes-nivel-reserva.page.scss'],
})
export class DonantesNivelReservaPage implements OnInit {
  existenciaSangre;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getTiposSangre();
  }

  async getTiposSangre() {
    const loading = await this.loadingController.create({
      message: 'Existencia Tipos de Sangre',
    });
    await loading.present();
    await this.api.getExistenciaSangre()
      .subscribe(res => {
        console.log(res);
        this.existenciaSangre = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
