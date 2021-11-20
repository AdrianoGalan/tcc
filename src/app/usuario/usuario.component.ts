import { Observable, empty } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
} from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { Usuario } from "../model/usuario";
import { UsuarioService } from "./usuario.service";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
  preserveWhitespaces: true, // usa o espaço no html
})
export class UsuarioComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  bsModalRef!: BsModalRef;

  queryField = new FormControl();

  constructor(
    private service: UsuarioService,
    private modalService: BsModalService
  ) {}

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
      this.usuarios$ = this.service.busca(value).pipe(
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
    this.usuarios$ = this.service.list().pipe(
      catchError((error) => {
        this.handleError("Erro ao carregar");
        return empty();
      })
    );
  }

  onDelete(u: Usuario) {
    this.service.deleteUsuario(u).subscribe(
      (success) => {
        this.handleError("Usuario Deletado");
        this.ngOnInit();
      },
      (erro) => {
        this.handleError("Erro ao Deletar");
      }
    );
  }

  buscar() {
    if (this.queryField.value?.length > 1) {
      this.usuarios$ = this.service.busca(this.queryField.value).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    }
  }


  handleError(erro: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = erro;
  }
}
