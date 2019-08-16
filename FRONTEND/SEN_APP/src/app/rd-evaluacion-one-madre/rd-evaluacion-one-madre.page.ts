import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-rd-evaluacion-one-madre',
  templateUrl: './rd-evaluacion-one-madre.page.html',
  styleUrls: ['./rd-evaluacion-one-madre.page.scss'],
})
export class RdEvaluacionOneMadrePage implements OnInit {

  public idMadre;
  public EvaluacionesMadre;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {

  }

  ngOnInit() {   
    this.idMadre = this.route.snapshot.paramMap.get('id');
    this.getEvaluacionesMadre(+this.idMadre);
  }
  async getEvaluacionesMadre(idMadre) {
    const loading = await this.loadingController.create({
      message: 'Evaluaciones Madre',
    });
    await loading.present();
    await this.api.getEvaluacionesMadre(idMadre)
      .subscribe(res => {
        this.EvaluacionesMadre = res;       
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteEvaluacion(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando...',
    });
    await loading.present();
    await this.api.deleteEvMadre(id)
      .subscribe(res => {
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
