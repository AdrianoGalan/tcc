import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

   funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {

    this.funcionarios = this.funcionarioService.getFuncionarios();
  }

  onEdit(f: Funcionario){
    
  }

}
