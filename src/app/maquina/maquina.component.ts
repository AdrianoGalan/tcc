import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { MaquinaServiceService } from './maquina.service';
import { Maquina } from '../model/maquina';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css'],
  preserveWhitespaces: true // usa o espaço no html
})
export class MaquinaComponent implements OnInit {

  bsModalRef!: BsModalRef;
  maquina$!: Observable<Maquina[]>;

  constructor(
    private service: MaquinaServiceService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    this.maquina$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }

      )
    )
  }


  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }

}
