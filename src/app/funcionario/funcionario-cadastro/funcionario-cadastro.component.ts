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
    private router: Router,
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
      dataAdm: [null, Validators.required],
      manutentor: [null, Validators.required]

    });




  }

  povoar() {

    this.formulario.get('matricula')?.setValue(this.funcionario.matricula);
    this.formulario.get('nome')?.setValue(this.funcionario.pessoa.nome);
    this.formulario.get('funcao')?.setValue(this.funcionario.funcao);
    this.formulario.get('dataAdm')?.setValue(this.funcionario.dataAdm);

    if(this.funcionario.manutentor == 'Sim'){
      this.formulario.get('manutentor')?.setValue(true);
    }

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
        this.funcionario.status = 'A';

        if( this.formulario.value['manutentor']){
          this.funcionario.manutentor = 'Sim'
        }else{
          this.funcionario.manutentor = 'Não'
        }




        this.funcionarioService.salvarFuncionario(this.funcionario).subscribe(

          success => {

            this.formulario.reset();
            this.router.navigate(['funcionario']);

          },
          erro => {




          }

        );

      } else {



        this.funcionario.pessoa.nome = this.formulario.value['nome'];
        this.funcionario.funcao = this.formulario.value['funcao'];
        this.funcionario.dataAdm = this.formulario.value['dataAdm'];


        if( this.formulario.value['manutentor']){
          this.funcionario.manutentor = 'Sim'
        }else{
          this.funcionario.manutentor = 'Nao'
        }

        this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe(

          success => {
            this.formulario.reset();
            this.router.navigate(['funcionario']);
          },
          erro => {





          }

        );


      }
    }
  }

  comparar(obj1: Funcao, obj2: Funcao) {

    return obj1 && obj2 ? (obj1.funcao === obj2.funcao) : obj1 === obj2;
  }

  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
