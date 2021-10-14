import { catchError } from 'rxjs/operators';
import { OsService } from './os.service';
import { Os } from './../model/os';
import { empty, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css'],
  preserveWhitespaces: true
})
export class OsComponent implements OnInit {

  os$!: Observable<Os[]>;

  bsModalRef!: BsModalRef;

  constructor(
    private osService: OsService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.os$ = this.osService.list().pipe(
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
