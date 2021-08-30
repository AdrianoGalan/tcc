import { Pessoa } from './../../model/pessoa';
import { catchError, take } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Funcionario } from './../../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Funcao } from 'src/app/model/funcao';
@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {

  funcionario!: Funcionario;

  inscricao: Subscription;
  funcao$!: Observable<Funcao[]>;
  formulario!: FormGroup;
  novo: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService
  ) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let matricula = params['id'];

        if (matricula == null) {
          this.novo = true;
        } else {

          this.funcionarioService.getFuncionario(matricula).subscribe(
            f => {

              this.funcionario = f
              if (f) {
                this.povoar();
              }

            }
          );

        }

      }
    );
  }


  ngOnInit(): void {


    this.funcao$ = this.funcionarioService.listFuncao().pipe();


    this.formulario = this.formBuilder.group({
      matricula: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      funcao: [null, Validators.required],
      dataAdm: [null, Validators.required]

    });




  }

  povoar() {

    this.formulario.get('matricula')?.setValue(this.funcionario.matricula);
    this.formulario.get('nome')?.setValue(this.funcionario.pessoa.nome);
    this.formulario.get('funcao')?.setValue(this.funcionario.funcao.funcao);
    this.formulario.get('dataAdm')?.setValue(this.funcionario.dataAdm);
  }

  onSubmit() {


    if (this.formulario.valid) {
      if (this.novo) {

        this.funcionario = new Funcionario();
        let pessoa = new Pessoa();
        this.funcionario.pessoa = pessoa;

        this.funcionario.pessoa.nome = this.formulario.value['nome'];
        this.funcionario.funcao = this.formulario.value['funcao'];
        this.funcionario.dataAdm = this.formulario.value['dataAdm'];


     

        this.funcionarioService.salvarFuncionario(this.funcionario).subscribe(

          success => {

            this.formulario.reset();

          },
          erro => {




          }

        );

      } else {

       

        this.funcionario.pessoa.nome = this.formulario.value['nome'];
        this.funcionario.funcao = this.formulario.value['funcao'];
        this.funcionario.dataAdm = this.formulario.value['dataAdm'];

     

        this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe(

          success => {

           
            this.formulario.reset();
          },
          erro => {

          



          }

        );


      }
    }
  }


  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
