import { FuncionarioService } from './../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from './../../model/funcionario';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit, OnDestroy {

  funcionario$!: Observable<Funcionario>;
  inscricao: Subscription;
  private matricula: number = -1

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService
  ) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.matricula = params['id'];

        this.funcionario$ = this.funcionarioService.getFuncionario(this.matricula);
      }
    );
  }

  atualizar() {

    if (this.matricula != -1) {
      this.router.navigate([`funcionario/atualizar/${this.matricula}`])
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {

    this.inscricao.unsubscribe();

  }


}
