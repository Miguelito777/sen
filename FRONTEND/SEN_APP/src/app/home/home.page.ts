import { Component } from '@angular/core';
import { NullAstVisitor } from '@angular/compiler';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  public User:any=null;
  public password:any=null;
  public msj:any=null;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){}
  
login(){
if(this.User == 'kalisita' && this.password == 'kalisita123' || 'inge' && this.password == '123'){
    this.router .navigate(['/Catalogos']);
}else{
  this.msj = 'Usuario o contraseña incorrecta'
    }

  }

}
