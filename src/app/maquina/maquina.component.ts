import { Subscription } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
} from "rxjs/operators";
import { Observable, empty } from "rxjs";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Component, OnInit } from "@angular/core";
import { MaquinaService } from "./maquina.service";
import { Maquina } from "../model/maquina";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";
import { AuthService } from "../login/auth.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-maquina",
  templateUrl: "./maquina.component.html",
  styleUrls: ["./maquina.component.css"],
  preserveWhitespaces: true, // usa o espaço no html
})
export class MaquinaComponent implements OnInit {
  bsModalRef!: BsModalRef;
  maquina$!: Observable<Maquina[]>;
  permissao: number = 0;

  queryField = new FormControl();

  constructor(
    private service: MaquinaService,
    private modalService: BsModalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.permissao = this.authService.usuario.permissao;

    this.consulta("");

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
      this.maquina$ = this.service.busca(value).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    } else {
      this.maquina$ = this.service.list().pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    }
  }

  previsao(sigla: string) {
    this.service.getArquivo(sigla);
  }

  onDelete(m: Maquina) {
    this.service.delete(m).subscribe(
      (success) => {
        this.handleError("Maquina Deletado");
        this.ngOnInit();
      },
      (erro) => {
        this.handleError("Erro ao Deletar");
      }
    );
  }

  buscar() {
    if (this.queryField.value?.length > 1) {
      this.maquina$ = this.service.busca(this.queryField.value).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          return empty();
        })
      );
    }
  }

  handleError(msg: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = msg;
  }
}
