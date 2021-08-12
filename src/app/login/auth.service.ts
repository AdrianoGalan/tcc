import { Usuario } from './../model/usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {

   }

  fazerLogin(usuario: Usuario){
    if(usuario.login === 'usuario' && usuario.senha === '1234'){
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{

    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    }
  }
}
