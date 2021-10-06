import { OsCadastrarComponent } from './os-cadastrar/os-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { OsComponent } from './os.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OsComponent,
    OsCadastrarComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule,
    FormsModule,
    ReactiveFormsModule  ]
})
export class OsModule { }
