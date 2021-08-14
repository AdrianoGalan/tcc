import { FuncionarioService } from './../funcionario.service';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from './../../model/funcionario';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit, OnDestroy {

  funcionario: any | undefined; 
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService
    ) {
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let ra = params['id'];

          this.funcionario = this.funcionarioService.getFuncionario(ra);
        }
      );
     }

  ngOnInit(): void {
  }

  ngOnDestroy(){

    this.inscricao.unsubscribe();

  }

}
