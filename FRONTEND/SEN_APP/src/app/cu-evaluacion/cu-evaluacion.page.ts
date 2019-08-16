import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-cu-evaluacion',
  templateUrl: './cu-evaluacion.page.html',
  styleUrls: ['./cu-evaluacion.page.scss'],
})
export class CuEvaluacionPage implements OnInit {
  public EstadosPersona;
  public estadoPersonaSelect:any=[];
  public evaluacion:any={
    peso:null,
    talla:null,
    evaluacion:null,
    id_ninio:null,
    estado_persona:null,
    detalles_evaluacion:[]
  };
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.evaluacion.id_ninio = +this.route.snapshot.paramMap.get('id');
    if(+this.route.snapshot.paramMap.get('ev') > 0){
      this.getEvaluacion();
    }
  }
  async getEvaluacion() {
    const loading = await this.loadingController.create({
      message: 'Estados Persona',
    });
    await loading.present();
    await this.api.getEvaluacion(+this.route.snapshot.paramMap.get('ev'))
      .subscribe(res => {
        this.evaluacion = res;        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getEstadosPersona();
  }
  async getEstadosPersona() {
    const loading = await this.loadingController.create({
      message: 'Estados Persona',
    });
    await loading.present();
    await this.api.getEstadosPersona()
      .subscribe(res => {
        this.EstadosPersona = res;
        console.log(this.EstadosPersona);
        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  public addEstado(){   
    var estado_persona = {
      detalle_evaluacion:this.evaluacion.estado_persona.estado_persona,
      id_estado_persona:this.evaluacion.estado_persona.id
    }
    this.evaluacion.detalles_evaluacion.push(estado_persona);
  }
  async saveEvaluacion(){
    if(+this.route.snapshot.paramMap.get('ev') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Evaluacion',
      });
      await loading.present();
      await this.api.updateEv(this.route.snapshot.paramMap.get('ev'),this.evaluacion)
      .subscribe(res => {
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        }); 
    }else{
      /*if(+this.evaluacion.peso < 50 && +this.evaluacion.talla < 100){
        this.evaluacion.evaluacion = 'Desnutricion Aguda';
      }else if((+this.evaluacion.peso > 50 && +this.evaluacion.peso < 150 ) && (+this.evaluacion.talla > 100 && +this.evaluacion.talla < 150)){
        this.evaluacion.evaluacion = 'Normal';
      }else{
        this.evaluacion.evaluacion = 'Obeso';
      }*/
      const loading = await this.loadingController.create({
        message: 'Guardando Evaluacion',
      });
      await loading.present();
      await this.api.insEvaluacion(this.evaluacion)
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
