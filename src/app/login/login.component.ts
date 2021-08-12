import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  usuario!: Usuario;
 

  constructor(private formBuilder: FormBuilder) { 

    this.usuario = new Usuario();
    
  }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      usuario:[null],
      senha:[null]
    });

  }

  onSubmit(){

    this.usuario.senha = this.formulario.value['senha'];
    this.usuario.login = this.formulario.value['usuario']
    console.log(this.usuario)

  }

}
