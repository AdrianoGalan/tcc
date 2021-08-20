import { Subscription } from 'rxjs';
import { Funcionario } from './../../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    this.funcionario.funcao = this.formulario.value['funcao'];
    this.funcionario.dataAdm = this.formulario.value['dataAdm'];

    if (this.novo) {
      
    }else{

      this.funcionario.pessoa.nome = this.formulario.value['nome'];
      this.funcionarioService.atualizaFuncionario(this.funcionario).subscribe(

        success => {
  
          console.log('foi')
        },
        erro =>{

          console.log(erro)
  
        
  
        }
  
      );
  

    }
    //   let pessoa: Pessoa = new Pessoa();
    //   pessoa.id = 1234;
    //   pessoa.nome = this.formulario.value['nome'];



    //   // 

    //   if(this.novo){
    //    // this.funcionarioService.novoFuncionario(this.funcionario);
    //   }else{
    //    // this.funcionarioService.atualizarFuncionario(this.funcionario);
    //   }
  }

}
