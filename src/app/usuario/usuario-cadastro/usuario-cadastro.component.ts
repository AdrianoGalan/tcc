import { Usuario } from './../../model/usuario';
import { Observable } from 'rxjs';
import { FuncionarioService } from './../../funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css'],
  preserveWhitespaces: true
})
export class UsuarioCadastroComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;
  formulario!: FormGroup;
  novo: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.funcionarios$ = this.funcionarioService.list();


    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      funcionario: [null, Validators.required],
      permissao: [null, Validators.required]

    });
  }

  onSubmit() {

    if (this.formulario.valid) {


      if (this.novo) {

        let usuario = new Usuario();
        usuario.funcionario = this.formulario.value['funcionario'];
        usuario.senha = this.formulario.value['senha'];
        usuario.login = this.formulario.value['login'];
        usuario.permissao = this.formulario.value['permissao'];

        this.usuarioService.salvarUsuario(usuario).subscribe(

          success => {

            this.formulario.reset();

          },
          erro => {

            console.log(erro)


          }

        );

      } else {
        console.log('não é novo')
      }
    } else {
      console.log('não é valido')
    }
  }

}
