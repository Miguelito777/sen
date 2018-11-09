import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-congelador-cu',
  templateUrl: './congelador-cu.page.html',
  styleUrls: ['./congelador-cu.page.scss'],
})
export class CongeladorCUPage implements OnInit {

  congelador:any;
  almacenes:any;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { 
    this.congelador = {
      nombre:''
    }
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getCongelador(this.route.snapshot.paramMap.get('id'));
    }else{

    }
  }

  ngOnInit() {
    this.getAlmacenes();
  }

  async saveCongelador(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Congelador',
      });
      await loading.present();
      await this.api.updateCongelador(this.route.snapshot.paramMap.get('id'),this.congelador)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando Congelador',
      });
      await loading.present();
      await this.api.postCongelador(this.congelador)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/Catalogos']);
        }, (err) => {
          console.log(err);
        });
    }
  }

  async getCongelador(id) {
    const loading = await this.loadingController.create({
      message: 'Congelador',
    });
    await loading.present();
    await this.api.getCongeladorById(id)
      .subscribe(res => {
        console.log(res);
        this.congelador = res[0];
        for(var i in this.almacenes){
          if(this.almacenes[i].id == this.congelador.tc_almacen.id){
            this.almacenes[i].current = true;            
            this.congelador.tc_almacen_id_almacen = this.almacenes[i].id;
          }
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getAlmacenes() {
    const loading = await this.loadingController.create({
      message: 'Almacenes',
    });
    await loading.present();
    await this.api.getAlmacen()
      .subscribe(res => {
        console.log(res);
        this.almacenes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
