import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarDonantePage } from './registrar-donante.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarDonantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarDonantePage]
})
export class RegistrarDonantePageModule {}
