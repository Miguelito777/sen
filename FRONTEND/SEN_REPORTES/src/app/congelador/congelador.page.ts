import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-congelador',
  templateUrl: './congelador.page.html',
  styleUrls: ['./congelador.page.scss'],
})
export class CongeladorPage implements OnInit {

  congeladores:any;
  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCongeladores();
  }

  async getCongeladores() {
    const loading = await this.loadingController.create({
      message: 'Congeladores',
    });
    await loading.present();
    await this.api.getCongeladores()
      .subscribe(res => {
        console.log(res);
        this.congeladores = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async deleteCongelador(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteCongelador(id)
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
