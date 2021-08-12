import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { OsComponent } from './os.component';


@NgModule({
  declarations: [
    OsComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule
  ]
})
export class OsModule { }
