import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuEvaluacionPage } from './cu-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: CuEvaluacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuEvaluacionPage]
})
export class CuEvaluacionPageModule {}
