import { empty, Observable, of } from 'rxjs';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
  preserveWhitespaces: true // usa o espaço no html
})
export class FuncionarioComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;
  bsModalRef!: BsModalRef;
  queryField = new FormControl();

  constructor(
    private funcionarioService: FuncionarioService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {

    this.onRefresh();

    this.queryField.valueChanges
      .pipe(
        map((value) => value.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => this.consulta(value))
      )
      .subscribe();

  }

  consulta(value: string) {
    if (value.length > 0) {
      this.funcionarios$ = this.funcionarioService.busca(value).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    } else {
      
      this.onRefresh();
    }
  }


  onRefresh() {
    this.funcionarios$ = this.funcionarioService.list().pipe(
      catchError(error => {
        this.handleError('Erro ao carregar');
        return empty()
      })
    );

  }


  onEdit(f: Funcionario){
    
  }

  onDelete(f: Funcionario){
    this.funcionarioService.delete(f).subscribe(

      success => {

        this.handleError('Funcionario Deletado');
        this.ngOnInit();

      },
      erro => {

        this.handleError('Erro ao Deletar');


      }

    );
  }


  handleError(msg: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = msg;
  }
  
  buscar(){
    if (this.queryField.value?.length > 1) {
      this.funcionarios$= this.funcionarioService.busca(this.queryField.value).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    }
  }

}
