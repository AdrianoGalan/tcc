import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Fabricante } from '../model/fabricante';
import { Pessoa } from '../model/pessoa';
import { FabricanteService } from './fabricante.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  formulario!: FormGroup;
  submitted = false;
  private fabricante!: Fabricante;

  config = {
    keyboard: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private fabricanteService: FabricanteService,
    public bsModalRef: BsModalRef
  ) { }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      nome: [null, [Validators.required, Validators.minLength(3)]]

    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.formulario.valid) {

      this.fabricante = new Fabricante();
      let p: Pessoa = new Pessoa();

      this.fabricante.pessoa = p;

      this.fabricante.pessoa.nome = this.formulario.value['nome'];

      console.log(this.fabricante)

      this.fabricanteService.salvarFabricante(this.fabricante).subscribe(
        success => {
          this.bsModalRef.hide();
        },
        erro => {

          console.log(erro);
        }
      );
    }
  }


  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
