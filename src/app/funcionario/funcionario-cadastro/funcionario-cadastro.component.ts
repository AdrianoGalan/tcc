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

    console.log(this.funcao$)

    this.formulario = this.formBuilder.group({
      matricula: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      funcao: [null, Validators.required],
      dataAdm: [null, Validators.required]

    });




  }

  povoar() {
    this.formulario = this.formBuilder.group({
      matricula: [this.funcionario.matricula],
      nome: [this.funcionario.pessoa.nome, [Validators.required, Validators.minLength(3)]],
      funcao: [this.funcionario.funcao, Validators.required],
      dataAdm: [this.funcionario.dataAdm, Validators.required]

    });
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


        console.log(this.funcionario)

        this.funcionarioService.atualizaFuncionario(this.funcionario).subscribe(

          success => {

            this.formulario.reset

          },
          erro => {

            console.log(erro)



          }

        );

      } else {

        console.log("this.formulario.value['funcao']")
        // this.funcionario.pessoa.nome = this.formulario.value['nome'];
        // this.funcionarioService.atualizaFuncionario(this.funcionario).subscribe(

        //   success => {

        //     console.log('foi')
        //   },
        //   erro =>{

        //     console.log(erro)



        //   }

        // );


      }
    }
  }


  hasError(field: string) {

    
    return this.formulario.get(field)?.errors
    
   }

}
