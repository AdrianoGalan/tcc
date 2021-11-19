import { catchError } from "rxjs/operators";
import { OsService } from "./os.service";
import { Os } from "./../model/os";
import { empty, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";
import { Usuario } from "../model/usuario";
import { AuthService } from "../login/auth.service";

@Component({
  selector: "app-os",
  templateUrl: "./os.component.html",
  styleUrls: ["./os.component.css"],
  preserveWhitespaces: true,
})
export class OsComponent implements OnInit {
  os$!: Observable<Os[]>;

  bsModalRef!: BsModalRef;
  permissao: number = 0;

  constructor(
    private osService: OsService,
    private modalService: BsModalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.permissao = this.authService.usuario.permissao;

    this.os$ = this.osService.list().pipe(
      catchError((error) => {
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = "Erro ao carregar";
  }
}
