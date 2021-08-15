import { Pessoa } from './../model/pessoa';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionarios: Funcionario[] = []
  private funcao: string[] = ['Eletricista', 'Mecanico', 'Lubrificador', 'Coordenador', 'Supervisor']


  constructor() {
    this.geraFuncionarios();
  }

  geraFuncionarios(){

    for (let index = 0; index < 8; index++) {

      let p: Pessoa = new Pessoa();
      p.id = index + 7;
      p.nome = "nome da pessoa" + index;
      
      let f: Funcionario = new Funcionario();
      f.dataAdm = `2021-08-${index+10}`;
      f.funcao = 'eletricista';
      f.matricula = index;
      f.pessoa = p;
      
      this.funcionarios.push(f);
    }

  }

  getFuncionarios(){
   
    return this.funcionarios
  }

  getFuncionario(matricula: number){

    let f: Funcionario = new Funcionario

    for (let index = 0; index < this.funcionarios.length; index++) {

    if( this.funcionarios[index].matricula == matricula){

      return this.funcionarios[index];
    }
      
    }

    return f ;
 

  }

  getFuncao(){
    return this.funcao;
  }

  atualizarFuncionario(f: Funcionario){


  }

  novoFuncionario(f: Funcionario){

    this.funcionarios.push(f);

  }


}


