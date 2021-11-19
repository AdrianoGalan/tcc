import { Usuario } from './model/usuario';
import { Funcionario } from './model/funcionario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tcc';

  //teste mudar para false
  mostrarMenu: boolean = false;
  usuario!: Usuario;

  constructor(private authService: AuthService){



  }
  ngOnInit(){

    this.authService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar

    );

    this.authService.mostrarUsuario.subscribe(


      u => this.usuario = u
    )

  }

  onLogoff(){

    this.authService.sair()

  }

}
