import { MaquinaCadastroComponent } from './maquina-cadastro/maquina-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinaComponent } from './maquina.component';

const routes: Routes = [
  { path: '', component: MaquinaComponent },
  { path: 'cadastrar', component: MaquinaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquinaRoutingModule { }
