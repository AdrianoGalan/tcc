import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'novo', component: UsuarioCadastroComponent },
  { path: 'atualizar/:login', component: UsuarioCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
