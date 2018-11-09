import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, 
          FormBuilder, FormGroup, NgForm, Validators, FormArray 
} from '@angular/forms';

@Component({
  selector: 'app-registrar-donante',
  templateUrl: './registrar-donante.page.html',
  styleUrls: ['./registrar-donante.page.scss'],
})
export class RegistrarDonantePage implements OnInit {
  
  donanteForm: FormGroup;
  donantes: FormArray;
  tiposSangre: any;
  donante:any;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.donante = {
      tc_tipo_sangre_id_tipo_sangre:0,
      nombre:'',
      direccion:'',
      telefonos:'',
      correo:'',
      fechaNacimiento:'',
      peso:0,
      sexo:'',
      epatitis:false,
      tatAcuPir:false,

    };
    if(+this.route.snapshot.paramMap.get('id') > 0){
      this.getDonante(this.route.snapshot.paramMap.get('id'));
      
    }else{
      //this.getGruposSanguineos();
      //this.getFactoresRh();
      //this.getUnidades();
    }
    /*this.getClassroom(this.route.snapshot.paramMap.get('id'));
    this.classroomForm = this.formBuilder.group({
      'class_name' : [null, Validators.required],
      'students' : this.formBuilder.array([])
    });*/
    /*this.donanteForm = this.formBuilder.group({
      'class_name' : [null, Validators.required],
      'students' : this.formBuilder.array([])
    });*/
    
  }

  ngOnInit() {
    this.getTiposSangre();
  }

  public registrarDonante(){
    this.donante.fecha_nacimiento = new Date(this.donante.fechaNacimiento.year.value,+this.donante.fechaNacimiento.month.value-1,this.donante.fechaNacimiento.day.value);
    this.saveDonante();
  }

  async saveDonante(){
    if(+this.route.snapshot.paramMap.get('id') > 0){
      const loading = await this.loadingController.create({
        message: 'Actualizando Donante',
      });
      await loading.present();
      await this.api.updateDonante(this.route.snapshot.paramMap.get('id'),this.donante)
      .subscribe(res => {
        console.log(res);
        loading.dismiss();  
        //let id = res['id'];
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });   
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando Donante',
      });
      await loading.present();
      await this.api.postDonante(this.donante)
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
  async getTiposSangre() {
    const loading = await this.loadingController.create({
      message: 'Tipos de Sangre',
    });
    await loading.present();
    await this.api.getTiposSangre()
      .subscribe(res => {
        console.log(res);
        this.tiposSangre = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getDonante(id) {
    const loading = await this.loadingController.create({
      message: 'Donante',
    });
    await loading.present();
    await this.api.getDonanteById(id)
      .subscribe(res => {
        console.log(res);
        this.donante = res[0];
        var dateBorn = this.donante.fecha_nacimiento.split('-');
        var fechaNacimiento = {
          day:{
            text: dateBorn[2], value: +dateBorn[2], columnIndex: 0
          },
          month:{
            text: dateBorn[1], value: +dateBorn[1], columnIndex: 1
          },
          year:{
            text: dateBorn[0], value: +dateBorn[0], columnIndex: 2
          }
        };
        this.donante.fechaNacimiento = fechaNacimiento;
        loading.dismiss();
        for(var i in this.tiposSangre){
          if(this.tiposSangre[i].id == this.donante.tc_tipo_sangre.id){
            this.tiposSangre[i].current = true;
            this.donante.tiposSangre = this.tiposSangre[i].tc_grupo_sanguineo.grupo_sanguineo+this.tiposSangre[i].tc_factor_rh.factor_rh; 
            this.donante.tc_tipo_sangre_id_tipo_sangre = this.tiposSangre[i].id;
          }
        }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  createStudent(): FormGroup {
    return this.formBuilder.group({
      student_name: ''
    });
  }
  
  /*addBlankStudent(): void {
    this.students = this.classroomForm.get('students') as FormArray;
    this.students.push(this.createStudent());
  }*/

  deleteStudent(control, index) {
    control.removeAt(index)
  }
  /*async saveClassroom(){
    await this.api.postClassroom(this.classroomForm.value)
    .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/detail/'+id]);
      }, (err) => {
        console.log(err);
      });
  }*/


}
