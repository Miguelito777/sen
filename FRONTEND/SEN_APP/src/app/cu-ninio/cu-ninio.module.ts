import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuNinioPage } from './cu-ninio.page';
//import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: CuNinioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicSelectableModule,
    RouterModule.forChild(routes),
    //IonicSelectableModule
  ],
  declarations: [CuNinioPage]
})
export class CuNinioPageModule {}
