import { FuncionarioService } from './../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from './../../model/funcionario';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit, OnDestroy {

  funcionario!: Funcionario; 
  inscricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService
    ) {
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let matricula = params['id'];

          this.funcionario = this.funcionarioService.getFuncionario(matricula);
        }
      );
     }

  atualizar(){

    this.router.navigate([`funcionario/atualizar/${this.funcionario.matricula}`])

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){

    this.inscricao.unsubscribe();

  }


}
