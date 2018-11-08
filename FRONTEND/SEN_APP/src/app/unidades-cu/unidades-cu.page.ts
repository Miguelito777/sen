import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-unidades-cu',
  templateUrl: './unidades-cu.page.html',
  styleUrls: ['./unidades-cu.page.scss'],
})
export class UnidadesCUPage implements OnInit {
  unidad : any;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { 
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getUnidad(this.route.snapshot.paramMap.get('id'));
    }else{
      this.unidad = {
        unidad:''
      }
    }
  }

  ngOnInit() {
  }
  async saveUnidad(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Unidad ',
      });
      await loading.present();
      await this.api.updateUnidades(this.route.snapshot.paramMap.get('id'),this.unidad)
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
        message: 'Guardando Factor',
      });
      await loading.present();
      await this.api.postUnidades(this.unidad)
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

  async getUnidad(id) {
    const loading = await this.loadingController.create({
      message: 'Unidad',
    });
    await loading.present();
    await this.api.getUnidadesById(id)
      .subscribe(res => {
        console.log(res);
        this.unidad = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
