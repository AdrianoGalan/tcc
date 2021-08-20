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

  funcionario!: Funcionario;

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

        if (matricula == null) {
          this.novo = true;
        } else {

          this.funcionarioService.getFuncionario(matricula).subscribe(
            f => {

              this.funcionario = f
             
            }
          );

        }

      }
    );
  }


  ngOnInit(): void {

   
      this.formulario = this.formBuilder.group({
        matricula: [null],
        nome: [null],
        funcao: [null],
        dataAdm: [null]

      });

      console.log(this.formBuilder)
    
    
  }

  povoar(){
    this.formBuilder.group
  }

  onSubmit() {

    //   let pessoa: Pessoa = new Pessoa();
    //   pessoa.id = 1234;
    //   pessoa.nome = this.formulario.value['nome'];


    //   // this.funcionario.matricula = this.formulario.value['matricula'];
    //   // this.funcionario.pessoa = pessoa 
    //   // this.funcionario.funcao = this.formulario.value['funcao'];
    //   // this.funcionario.dataAdm = this.formulario.value['dataAdm'];

    //   // console.log(this.funcionario)

    //   if(this.novo){
    //    // this.funcionarioService.novoFuncionario(this.funcionario);
    //   }else{
    //    // this.funcionarioService.atualizarFuncionario(this.funcionario);
    //   }
  }

}
