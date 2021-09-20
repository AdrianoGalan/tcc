import { SetorService } from './setor.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Setor } from '../model/setor';

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
    private setorservice: SetorService,
    public bsModalRef: BsModalRef
  ) { }



  ngOnInit(): void {


    this.formulario = this.formBuilder.group({

      nome: [null, [Validators.required, Validators.minLength(3)]],
      ramal: [null, [Validators.required, Validators.minLength(4)]],

    });
  }

  onSubmit() {

    this.submitted = true;

    console.log('1');

    if (this.formulario.valid) {


      console.log('2');

      let setor: Setor = new Setor();
      setor.nome = this.formulario.value['nome'];
      setor.ramal = this.formulario.value['ramal'];



      console.log(setor);

      this.setorservice.salvarSetor(setor).subscribe(
        success => {


          console.log('3');
          this.bsModalRef.hide();
        },
        erro => {

          console.log('4');
          console.log(erro);
        }
      )
    }

  }

  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
