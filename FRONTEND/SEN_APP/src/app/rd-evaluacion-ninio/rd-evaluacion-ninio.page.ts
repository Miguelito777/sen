import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-rd-evaluacion-ninio',
  templateUrl: './rd-evaluacion-ninio.page.html',
  styleUrls: ['./rd-evaluacion-ninio.page.scss'],
})
export class RdEvaluacionNinioPage implements OnInit {
  public idNinio;
  public EvaluacionesNinio;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {

  }
  ngOnInit() {   
    this.idNinio = this.route.snapshot.paramMap.get('id');
    this.getEvaluacionesNinio(+this.route.snapshot.paramMap.get('id'));
  }
  async getEvaluacionesNinio(idNinio) {
    const loading = await this.loadingController.create({
      message: 'Evaluaciones Ninios',
    });
    await loading.present();
    await this.api.getEvaluacionesNinio(idNinio)
      .subscribe(res => {
        this.EvaluacionesNinio = res;       
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}

