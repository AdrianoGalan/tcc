import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  usuario: Usuario = new Usuario();
  submitted = false;
 

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { 

    
  }

  ngOnInit(): void {

      this.formulario = this.formBuilder.group({
      usuario:[null, Validators.required],
      senha:[null, Validators.required]
    });

  }

  hasError(field: string) {

    
   return this.formulario.get(field)?.errors
   
  }

  onSubmit(){

    this.submitted = true

    if(this.formulario.valid){

      this.usuario.senha = this.formulario.value['senha'];
      this.usuario.login = this.formulario.value['usuario']
      this.authService.fazerLogin(this.usuario);

    }else{
      console.log("eita")
    }

    
    

  }

}
