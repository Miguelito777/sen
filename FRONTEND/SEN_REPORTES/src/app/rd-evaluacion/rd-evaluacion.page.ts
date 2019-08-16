import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-rd-evaluacion',
  templateUrl: './rd-evaluacion.page.html',
  styleUrls: ['./rd-evaluacion.page.scss'],
})
export class RdEvaluacionPage implements OnInit {
  public ninios;
  public idReporte;
  public meses:any=[
    {id:1,mes:"ENERO"},
    {id:2,mes:"FEBRERO"},
    {id:3,mes:"MARZO"},
    {id:4,mes:"ABRIL"},
    {id:5,mes:"MAYO"},
    {id:6,mes:"JUNIO"},
    {id:7,mes:"JULIO"},
    {id:8,mes:"AGOSTO"},
    {id:9,mes:"SEPTIEMBRE"},
    {id:10,mes:"OCTUBRE"},
    {id:11,mes:"NOVIEMBRE"},
    {id:12,mes:"DICIEMBRE"},
  ];
  public anios:any=[
    {id:1,anio:"2008"},
    {id:2,anio:"2009"},
    {id:3,anio:"2010"},
    {id:4,anio:"2011"},
    {id:5,anio:"2012"},
    {id:6,anio:"2013"},
    {id:7,anio:"2014"},
    {id:8,anio:"2015"},
    {id:9,anio:"2016"},
    {id:10,anio:"2017"},
    {id:11,anio:"2018"},
    {id:12,anio:"2019"},
  ];
  public reportes:any=[
    {id:1,reporte:"ESTADO NUTRICIONAL NORMAL"},
    {id:2,reporte:"DESNUTRICION AGUDA MODERADA"},
    {id:3,reporte:"DESNUTRICION AGUDA SEVERA"},
    {id:4,reporte:"PESO ADECUADO PARA LA EDAD"},
    {id:5,reporte:"BAJO PESO PARA LA EDAD"},
    {id:6,reporte:"CRECIMIENTO ADECUADO PARA LA EDAD"},
    {id:7,reporte:"RETARDO MODERADO DE CRECIMIENTO"},
    {id:8,reporte:"MADRES BAJAS DE PESO"},
    {id:9,reporte:"MADRES CON PESO NORMAL"},
    {id:10,reporte:"MADRES EN SOBREPESO"},
    {id:11,reporte:"MADRES EN OBESIDAD"}
  ];
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    //this.getNinios();
  }
  async getNinios() {
    const loading = await this.loadingController.create({
      message: 'Ninios',
    });
    await loading.present();
    await this.api.getNinios()
      .subscribe(res => {
        this.ninios = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


}
