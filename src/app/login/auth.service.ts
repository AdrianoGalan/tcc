import { Usuario } from './../model/usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  private readonly API = `${environment.API}usuario`
  valido: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient
    ) {

   }

  fazerLogin(usuario: Usuario){

    this.validar(usuario).subscribe(
      success => {

        console.log("validou")
        

      },
      erro => {

        console.log(erro)


      }
    )

    if(this.valido){
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{

    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    }
  }

  estaAutenticado(){
    return this.usuarioAutenticado
  }

  sair(){
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['login']);
  }

  validar(u: Usuario){

    return this.http.post(`${this.API}/${u.login}`, {headers: new HttpHeaders().set('Content-Type', 'application/json')}).pipe(take(1))

  }
}
