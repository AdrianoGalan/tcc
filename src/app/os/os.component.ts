import { catchError, debounceTime, distinctUntilChanged, map, tap } from "rxjs/operators";
import { OsService } from "./os.service";
import { Os } from "./../model/os";
import { empty, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";
import { Usuario } from "../model/usuario";
import { AuthService } from "../login/auth.service";
import { FormControl } from "@angular/forms";

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
  queryField = new FormControl();


  constructor(
    private osService: OsService,
    private modalService: BsModalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.permissao = this.authService.usuario.permissao;

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

  consulta(value: string){

    if (value.length > 0) {
      this.os$ = this.osService.busca(value).pipe(
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
  
    this.os$ = this.osService.list().pipe(
      catchError((error) => {
        this.handleError("Erro ao carregar");
        return empty();
      })
    );
  }

  buscar(){
    if (this.queryField.value?.length > 1) {
      this.os$ = this.osService.busca(this.queryField.value).pipe(
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
