import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdEvaluacionMadrePage } from './rd-evaluacion-madre.page';

const routes: Routes = [
  {
    path: '',
    component: RdEvaluacionMadrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdEvaluacionMadrePage]
})
export class RdEvaluacionMadrePageModule {}
