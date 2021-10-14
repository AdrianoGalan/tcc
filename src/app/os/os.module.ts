import { OsCadastrarComponent } from './os-cadastrar/os-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { OsComponent } from './os.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OsAtualizarComponent } from './os-atualizar/os-atualizar.component';
import { OsFinalizarComponent } from './os-finalizar/os-finalizar.component';



@NgModule({
  declarations: [
    OsComponent,
    OsCadastrarComponent,
    OsAtualizarComponent,
    OsFinalizarComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule,
    FormsModule,
    ReactiveFormsModule  ]
})
export class OsModule { }
