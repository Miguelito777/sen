import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonantesTipoSangrePage } from './donantes-tipo-sangre.page';

const routes: Routes = [
  {
    path: '',
    component: DonantesTipoSangrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonantesTipoSangrePage]
})
export class DonantesTipoSangrePageModule {}
