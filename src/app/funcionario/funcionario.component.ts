import { Observable } from 'rxjs';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {

    this.onRefresh();

  }


  onRefresh() {
    this.funcionarios$ = this.funcionarioService.list().pipe();
  }


  onEdit(f: Funcionario){
    
  }

}
