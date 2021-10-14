import { OsCadastrarComponent } from './os-cadastrar/os-cadastrar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OsComponent } from './os.component';
import { OsFinalizarComponent } from './os-finalizar/os-finalizar.component';
import { OsAtualizarComponent } from './os-atualizar/os-atualizar.component';

const routes: Routes = [
  { path: '', component: OsComponent },
  { path: 'cadastrar', component: OsCadastrarComponent},
  { path: 'atualizar/:id', component: OsAtualizarComponent},
  { path: 'finalizar/:id', component: OsFinalizarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsRoutingModule { }
