import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-cu-evaluacion-madre',
  templateUrl: './cu-evaluacion-madre.page.html',
  styleUrls: ['./cu-evaluacion-madre.page.scss'],
})
export class CuEvaluacionMadrePage implements OnInit {
  public evaluacion:any={
    evaluacion_madre:null,
    id_madre:null
  };

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.evaluacion.id_madre = +this.route.snapshot.paramMap.get('id');
    if(+this.route.snapshot.paramMap.get('ev') > 0){
      this.getEvaluacion();
    }
  }

  ngOnInit() {
  }
  async getEvaluacion() {
    const loading = await this.loadingController.create({
      message: 'Evaluación madre',
    });
    await loading.present();
    await this.api.getEvaluacionMadre(+this.route.snapshot.paramMap.get('ev'))
      .subscribe(res => {
        this.evaluacion = res;        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async saveEvaluacion(){
    if(+this.route.snapshot.paramMap.get('ev') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Evaluacion',
      });
      await loading.present();
      await this.api.updateEvMadre(this.route.snapshot.paramMap.get('ev'),this.evaluacion)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        }); 
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando Evaluacion',
      });
      await loading.present();
      await this.api.insEvaluacionMadre(this.evaluacion)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        }); 
    }
  }
}
