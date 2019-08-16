import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuEvaluacionMadrePage } from './cu-evaluacion-madre.page';

const routes: Routes = [
  {
    path: '',
    component: CuEvaluacionMadrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuEvaluacionMadrePage]
})
export class CuEvaluacionMadrePageModule {}
