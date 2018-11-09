import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RetirarUnidadesCaducadasPage } from './retirar-unidades-caducadas.page';

const routes: Routes = [
  {
    path: '',
    component: RetirarUnidadesCaducadasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RetirarUnidadesCaducadasPage]
})
export class RetirarUnidadesCaducadasPageModule {}
