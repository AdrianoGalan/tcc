import { Usuario } from './../../model/usuario';
import { Observable, Subscription } from 'rxjs';
import { FuncionarioService } from './../../funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css'],
  preserveWhitespaces: true
})
export class UsuarioCadastroComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;
  formulario!: FormGroup;
  novo: boolean = false;
  inscricao: Subscription;
  usuario!: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['login'];

        if (id == null) {
          this.novo = true;
        } else {

          this.usuarioService.getUsuario(id).subscribe(
            u => {

              this.usuario = u
              if (u) {
                this.povoar();
              }

            }
          );

        }

      }
    );


  }

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

        this.usuario = new Usuario();

        this.usuario.funcionario = this.formulario.value['funcionario'];
        this.usuario.senha = this.formulario.value['senha'];
        this.usuario.login = this.formulario.value['login'];
        this.usuario.permissao = this.formulario.value['permissao'];

        this.usuarioService.salvarUsuario(this.usuario).subscribe(

          success => {

            this.formulario.reset();

          },
          erro => {

            console.log(erro)


          }

        );


      } else {

        this.usuario.funcionario = this.formulario.value['funcionario'];
        this.usuario.senha = this.formulario.value['senha'];
        this.usuario.login = this.formulario.value['login'];
        this.usuario.permissao = this.formulario.value['permissao'];

        this.usuarioService.atualizarUsuario(this.usuario).subscribe(

          success => {

            this.formulario.reset();

          },
          erro => {

            console.log(erro)


          }

        );
      }
    } else {
      console.log('não é valido')
    }
  }


  povoar() {

    this.formulario.get('funcionario')?.setValue(this.usuario.funcionario);
    this.formulario.get('permissao')?.setValue(this.usuario.permissao);
    this.formulario.get('senha')?.setValue(this.usuario.senha);
    this.formulario.get('login')?.setValue(this.usuario.login);

  }

}
