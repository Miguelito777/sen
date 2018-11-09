import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-grupo-sanguineo',
  templateUrl: './grupo-sanguineo.page.html',
  styleUrls: ['./grupo-sanguineo.page.scss'],
})
export class GrupoSanguineoPage implements OnInit {
  
  gruposSanguineos: any;

  constructor(
    public api: RestApiService, 
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.getGruposSanguineos();
  }
  async getGruposSanguineos() {
    const loading = await this.loadingController.create({
      message: 'Grupos Sanguineos',
    });
    await loading.present();
    await this.api.getGrupoSanguineo()
      .subscribe(res => {
        console.log(res);
        this.gruposSanguineos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async deleteStudent(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteGrupoSanguineo(id)
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
