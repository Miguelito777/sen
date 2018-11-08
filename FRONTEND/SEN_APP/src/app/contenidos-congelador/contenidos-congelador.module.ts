import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContenidosCongeladorPage } from './contenidos-congelador.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidosCongeladorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContenidosCongeladorPage]
})
export class ContenidosCongeladorPageModule {}
