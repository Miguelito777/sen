import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CongeladorCUPage } from './congelador-cu.page';

const routes: Routes = [
  {
    path: '',
    component: CongeladorCUPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CongeladorCUPage]
})
export class CongeladorCUPageModule {}
