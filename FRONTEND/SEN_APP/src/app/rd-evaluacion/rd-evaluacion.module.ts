import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdEvaluacionPage } from './rd-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: RdEvaluacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdEvaluacionPage]
})
export class RdEvaluacionPageModule {}
