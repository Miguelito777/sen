import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-donantes',
  templateUrl: './donantes.page.html',
  styleUrls: ['./donantes.page.scss'],
})
export class DonantesPage implements OnInit {
  donantes:any;
  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getDonantes();
  }
  async getDonantes() {
    const loading = await this.loadingController.create({
      message: 'Donantes',
    });
    await loading.present();
    await this.api.getDonantes()
      .subscribe(res => {
        console.log(res);
        this.donantes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteDonante(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteDonante(id)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();
        this.router.navigate(['/']);
        //this.gruposSanguineos = res;
      }, err => {
        this.router.navigate(['/']);
        console.log(err);
        loading.dismiss();
      });
  }
}
