import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonantesNivelReservaPage } from './donantes-nivel-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: DonantesNivelReservaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonantesNivelReservaPage]
})
export class DonantesNivelReservaPageModule {}
