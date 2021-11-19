import { empty, Observable, of } from 'rxjs';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
  preserveWhitespaces: true // usa o espaço no html
})
export class FuncionarioComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;
  bsModalRef!: BsModalRef;

  constructor(
    private funcionarioService: FuncionarioService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {

    this.onRefresh();

  }


  onRefresh() {
    this.funcionarios$ = this.funcionarioService.list().pipe(
      catchError(error => {
        this.handleError();
        return empty()
      })
    );

  }


  onEdit(f: Funcionario){
    
  }


  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }
  

}
