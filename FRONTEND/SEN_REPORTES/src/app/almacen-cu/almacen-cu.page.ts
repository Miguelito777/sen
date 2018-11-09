import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-almacen-cu',
  templateUrl: './almacen-cu.page.html',
  styleUrls: ['./almacen-cu.page.scss'],
})
export class AlmacenCUPage implements OnInit {
  almacen : any;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { 
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getAlmacen(this.route.snapshot.paramMap.get('id'));
    }else{
      this.almacen = {
        nombre:''
      }
    }
  }

  ngOnInit() {
  }
  async saveAlmacen(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Almacen ',
      });
      await loading.present();
      await this.api.updateAlmacen(this.route.snapshot.paramMap.get('id'),this.almacen)
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
      await this.api.postAlmacen(this.almacen)
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

  async getAlmacen(id) {
    const loading = await this.loadingController.create({
      message: 'Almacen',
    });
    await loading.present();
    await this.api.getAlmacenById(id)
      .subscribe(res => {
        console.log(res);
        this.almacen = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
