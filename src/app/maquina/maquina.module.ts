import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinaRoutingModule } from './maquina-routing.module';
import { MaquinaComponent } from './maquina.component';
import { MaquinaCadastroComponent } from './maquina-cadastro/maquina-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaquinaComponent,
    MaquinaCadastroComponent
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class MaquinaModule { }
