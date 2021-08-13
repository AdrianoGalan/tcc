import { Pessoa } from './../model/pessoa';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionarios: Funcionario[] = []


  constructor() {
    this.geraFuncionarios();
  }

  geraFuncionarios(){

    for (let index = 0; index < 8; index++) {

      let p: Pessoa = new Pessoa();
      p.id = index + 7;
      p.nome = "pessoa " + index;
      
      let f: Funcionario = new Funcionario();
      f.dataAdm = index + " /4/2021";
      f.funcao = 'eletricista';
      f.ra = index;
      f.pessoa = p;
      
      this.funcionarios.push(f);
    }

  }

  getFuncionarios(){
   
    return this.funcionarios
  }


}


