import { FuncionarioService } from './../funcionario.service';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from './../../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {

  funcionario!: Funcionario;
 // inscricao: Subscription;

  constructor(
    private router: ActivatedRoute,
    private funcionarioService: FuncionarioService
    ) { }

  ngOnInit(): void {
  }

}
