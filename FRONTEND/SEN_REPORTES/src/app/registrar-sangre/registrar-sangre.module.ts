import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarSangrePage } from './registrar-sangre.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarSangrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarSangrePage]
})
export class RegistrarSangrePageModule {}
