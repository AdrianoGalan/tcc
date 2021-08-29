import { Observable } from 'rxjs';
import { FuncionarioService } from './../../funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;

  constructor(
    private funcionarioService: FuncionarioService
    ) { }

  ngOnInit(): void {

    this.funcionarios$ = this.funcionarioService.list();
  }

}
