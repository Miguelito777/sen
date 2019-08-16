import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdEvaluacionOneMadrePage } from './rd-evaluacion-one-madre.page';

const routes: Routes = [
  {
    path: '',
    component: RdEvaluacionOneMadrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdEvaluacionOneMadrePage]
})
export class RdEvaluacionOneMadrePageModule {}
