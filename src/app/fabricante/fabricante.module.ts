import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricanteComponent } from './fabricante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@NgModule({
  declarations: [
    FabricanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class FabricanteModule { }
