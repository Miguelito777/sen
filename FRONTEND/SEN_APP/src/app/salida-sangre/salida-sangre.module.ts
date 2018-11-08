import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalidaSangrePage } from './salida-sangre.page';

const routes: Routes = [
  {
    path: '',
    component: SalidaSangrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalidaSangrePage]
})
export class SalidaSangrePageModule {}
