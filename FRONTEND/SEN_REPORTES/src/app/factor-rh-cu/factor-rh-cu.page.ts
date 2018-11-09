import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-factor-rh-cu',
  templateUrl: './factor-rh-cu.page.html',
  styleUrls: ['./factor-rh-cu.page.scss'],
})
export class FactorRhCUPage implements OnInit {
  factorRh : any; 

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getFactorRh(this.route.snapshot.paramMap.get('id'));
    }else{
      this.factorRh = {
        factor_rh:''
      }
    }
   }

  ngOnInit() {
  }
  async saveFactor(){

    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Factor ',
      });
      await loading.present();
      await this.api.updateFactorRh(this.route.snapshot.paramMap.get('id'),this.factorRh)
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
      await this.api.postFactorRh(this.factorRh)
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

  async getFactorRh(id) {
    const loading = await this.loadingController.create({
      message: 'Factor Rh',
    });
    await loading.present();
    await this.api.getFactorRhId(id)
      .subscribe(res => {
        console.log(res);
        this.factorRh = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
