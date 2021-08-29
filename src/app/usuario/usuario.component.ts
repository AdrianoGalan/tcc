import { Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from './usuario.service';
import { take, catchError } from 'rxjs/operators';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  preserveWhitespaces: true // usa o espaço no html
})
export class UsuarioComponent implements OnInit {

  usuarios$!: Observable<Usuario[]>;
  bsModalRef!: BsModalRef;

  constructor(
    private service: UsuarioService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {

    this.usuarios$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty()
      })
    );

  }

  onDelete(u: Usuario){
    this.service.deleteUsuario(u).pipe(
      catchError(error => {
        console.log(error)
        this.handleError();
        return empty()
      })
    );
  }


  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }

}
