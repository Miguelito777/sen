import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FactorRhCUPage } from './factor-rh-cu.page';

const routes: Routes = [
  {
    path: '',
    component: FactorRhCUPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FactorRhCUPage]
})
export class FactorRhCUPageModule {}
