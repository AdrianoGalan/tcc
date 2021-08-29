import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
