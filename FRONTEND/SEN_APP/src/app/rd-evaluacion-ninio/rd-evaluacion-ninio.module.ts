import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RdEvaluacionNinioPage } from './rd-evaluacion-ninio.page';

const routes: Routes = [
  {
    path: '',
    component: RdEvaluacionNinioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RdEvaluacionNinioPage]
})
export class RdEvaluacionNinioPageModule {}
