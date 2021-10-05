import { OsCadastrarComponent } from './os-cadastrar/os-cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OsComponent } from './os.component';

const routes: Routes = [
  { path: '', component: OsComponent },
  { path: 'cadastrar', component: OsCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsRoutingModule { }
