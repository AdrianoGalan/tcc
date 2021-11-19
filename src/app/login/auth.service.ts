import { Usuario } from "./../model/usuario";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarUsuario = new EventEmitter<Usuario>();
  private readonly API = `${environment.API}usuario`;
  private usuario!: Usuario;

  constructor(private router: Router, private http: HttpClient) {}

  fazerLogin(usuario: Usuario) {
    this.validar(usuario).subscribe((u) => {
      if (u) {
        this.usuario = u;
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
        this.mostrarUsuario.emit(u);

        this.router.navigate(["/"]);
      }else{

        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);

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
}
