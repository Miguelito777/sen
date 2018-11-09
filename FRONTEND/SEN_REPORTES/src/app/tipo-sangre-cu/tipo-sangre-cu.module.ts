import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoSangreCUPage } from './tipo-sangre-cu.page';

const routes: Routes = [
  {
    path: '',
    component: TipoSangreCUPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoSangreCUPage]
})
export class TipoSangreCUPageModule {}
