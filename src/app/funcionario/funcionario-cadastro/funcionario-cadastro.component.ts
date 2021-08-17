import { Subscription, Observable } from 'rxjs';
import { Funcionario } from './../../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Pessoa } from 'src/app/model/pessoa';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {

  funcionario$!: Observable<Funcionario>;
  
  inscricao: Subscription;
  funcoes!: string[];
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

          if(matricula == null){
            this.novo = true;
          }

            this.funcionario$ = this.funcionarioService.getFuncionario(matricula)
          
        }
      );
     }


  ngOnInit(): void {

   // this.funcoes = this.funcionarioService.getFuncao();

    if(this.novo){

      this.formulario = this.formBuilder.group({
        matricula:[null],
        nome:[null],
        funcao:[null],
        dataAdm:[null]
  
      });

    }else{

      this.formulario = this.formBuilder.group({
        matricula:[this.funcionario.matricula],
        nome:[this.funcionario.pessoa.nome],
        funcao:[this.funcionario.funcao],
        dataAdm:[this.funcionario.dataAdm]
  
      });
    }
   
  }

  onSubmit(){

    let pessoa: Pessoa = new Pessoa();
    pessoa.id = 1234;
    pessoa.nome = this.formulario.value['nome'];


    this.funcionario.matricula = this.formulario.value['matricula'];
    this.funcionario.pessoa = pessoa 
    this.funcionario.funcao = this.formulario.value['funcao'];
    this.funcionario.dataAdm = this.formulario.value['dataAdm'];

    console.log(this.funcionario)

    if(this.novo){
     // this.funcionarioService.novoFuncionario(this.funcionario);
    }else{
     // this.funcionarioService.atualizarFuncionario(this.funcionario);
    }
  }

}
