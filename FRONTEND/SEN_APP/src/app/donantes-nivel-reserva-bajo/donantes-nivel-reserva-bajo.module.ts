import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonantesNivelReservaBajoPage } from './donantes-nivel-reserva-bajo.page';

const routes: Routes = [
  {
    path: '',
    component: DonantesNivelReservaBajoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonantesNivelReservaBajoPage]
})
export class DonantesNivelReservaBajoPageModule {}
