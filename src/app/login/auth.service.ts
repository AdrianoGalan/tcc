import { Usuario } from "./../model/usuario";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarUsuario = new EventEmitter<Usuario>();
  private readonly API = `${environment.API}usuario`;
  usuario!: Usuario;
  bsModalRef!: BsModalRef;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: BsModalService
  ) {}

  fazerLogin(usuario: Usuario) {
      this.validar(usuario).subscribe((u) => {
      if (u) {
        this.usuario = u;
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
        this.mostrarUsuario.emit(u);

        this.router.navigate(["/"]);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.handleError();
      }
    });
  }

  

  estaAutenticado() {
    return this.usuarioAutenticado;
  }

  sair() {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(["login"]);
  }

  validar(u: Usuario) {
    return this.http.post<Usuario>(`${this.API}/validar`, u);
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = "Usuario ou senha invalido";
  }
}
