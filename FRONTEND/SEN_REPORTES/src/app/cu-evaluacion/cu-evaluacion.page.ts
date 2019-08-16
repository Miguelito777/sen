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
  public ninios:any=[];
  public evaluacion:any={
    peso:null,
    talla:null,
    id_ninio:null,
    estado_persona:null,
    detalles_evaluacion:[]
  };
  public idReporte;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.idReporte = +this.route.snapshot.paramMap.get('id');
    console.log("El reporte seleccionado es: "+this.idReporte);
    
  }

  ngOnInit() {
    this.getReporteUno();
  }
  async getReporteUno() {
    const loading = await this.loadingController.create({
      message: 'Reporte',
    });
    await loading.present();
    await this.api.getReporteUno()
      .subscribe(res => {
        this.ninios = res;
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
