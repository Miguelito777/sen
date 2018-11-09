import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CantidadSangreTipoPage } from './cantidad-sangre-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: CantidadSangreTipoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CantidadSangreTipoPage]
})
export class CantidadSangreTipoPageModule {}
