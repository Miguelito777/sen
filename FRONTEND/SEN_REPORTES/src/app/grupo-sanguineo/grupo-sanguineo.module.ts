import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrupoSanguineoPage } from './grupo-sanguineo.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoSanguineoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GrupoSanguineoPage]
})
export class GrupoSanguineoPageModule {}
