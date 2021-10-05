import { OsCadastrarComponent } from './os-cadastrar/os-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { OsComponent } from './os.component';



@NgModule({
  declarations: [
    OsComponent,
    OsCadastrarComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule
  ]
})
export class OsModule { }
