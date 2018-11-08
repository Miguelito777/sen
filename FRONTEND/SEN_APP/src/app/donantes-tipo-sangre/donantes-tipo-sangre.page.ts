import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-donantes-tipo-sangre',
  templateUrl: './donantes-tipo-sangre.page.html',
  styleUrls: ['./donantes-tipo-sangre.page.scss'],
})
export class DonantesTipoSangrePage implements OnInit {
  donantes;
  edadInicial:0;
  edadFinal:0;
  genero;
  filtroDonantes;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAlmacen(this.route.snapshot.paramMap.get('id'));
  }
  
  async getAlmacen(id) {
    const loading = await this.loadingController.create({
      message: 'Almacen',
    });
    await loading.present();
    await this.api.getDonantesTipoSangre(id)
      .subscribe(res => {
        console.log(res);
        this.donantes = res;
        this.filtroDonantes = this.donantes;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  filtrar(){
    this.filtroDonantes = [];
    if((this.edadInicial || this.edadFinal) == null || (this.edadInicial || this.edadFinal) == undefined){
      if(this.genero == null || this.genero == undefined){
      }else{
        for(var i in this.donantes){
          if(this.donantes[i].sexo == this.genero){
            this.filtroDonantes.push(this.donantes[i]);
          }
        }
        //this.setFiltro(this.filtroDonantes);
      }
    }else{
      for(var i in this.donantes){
        var anioNacDonateString = this.donantes[i].fecha_nacimiento.split('-');
        var anioNacDonate = +anioNacDonateString[0];
        var anioActual = (new Date()).getFullYear();
        if(this.edadInicial < (anioActual-anioNacDonate) && (anioActual-anioNacDonate) < this.edadFinal){
          if(this.genero == null || this.genero == undefined){
            this.filtroDonantes.push(this.donantes[i]);
          }else{
            for(var i in this.donantes){
              if(this.donantes[i].sexo == this.genero){
                this.filtroDonantes.push(this.donantes[i]);
              }
            }
          }
        }
      }
      //this.setFiltro(this.filtroDonantes);
    }
  }
  setFiltro(filtrosDonantes){
    this.donantes = filtrosDonantes;
  }
}
