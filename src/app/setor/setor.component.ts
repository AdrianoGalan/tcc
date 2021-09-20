import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})

export class SetorComponent implements OnInit {

  formulario!: FormGroup;
  submitted = false;

  config = {
    keyboard: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) { }



  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
   
      nome: [null, [Validators.required, Validators.minLength(3)]],
      ramal: [null, Validators.required, Validators.minLength(4)],
      
    });
  }

  onSubmit(){

    this.submitted = true;

  }

  hasError(field: string) {

    
    return this.formulario.get(field)?.errors
    
   }
  
}
