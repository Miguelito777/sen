import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-grupo-sanguineo-cu',
  templateUrl: './grupo-sanguineo-cu.page.html',
  styleUrls: ['./grupo-sanguineo-cu.page.scss'],
})
export class GrupoSanguineoCUPage implements OnInit {
  grupoSanguineoForm: FormGroup;
  grupoSanguineo : any; 
  
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    //this.getClassroom(this.route.snapshot.paramMap.get('id'));
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getGrupoSanguineo(this.route.snapshot.paramMap.get('id'));
    }else{
      this.grupoSanguineo = {
        grupo_sanguineo:''
      }
    }
    this.grupoSanguineoForm = this.formBuilder.group({
      'grupo_sanguineo' : [/*null, Validators.required*/]/*,
      'students' : this.formBuilder.array([])*/
    });
   }

  ngOnInit() {
  }

  async saveGrupo(){

    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Grupo',
      });
      await loading.present();
      await this.api.updateGrupoSanguineo(this.route.snapshot.paramMap.get('id'),this.grupoSanguineoForm.value)
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
        message: 'Guardando Grupo',
      });
      await loading.present();
      await this.api.postGrupoSanguineo(this.grupoSanguineoForm.value)
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

  async getGrupoSanguineo(id) {
    const loading = await this.loadingController.create({
      message: 'Grupo Sanguineo',
    });
    await loading.present();
    await this.api.getGrupoSanguineoById(id)
      .subscribe(res => {
        console.log(res);
        this.grupoSanguineo = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
