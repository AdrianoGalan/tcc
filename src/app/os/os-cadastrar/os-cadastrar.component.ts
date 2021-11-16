import { Os } from './../../model/os';
import { OsService } from './../os.service';
import { Observable } from 'rxjs';
import { FuncionarioService } from './../../funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maquina } from 'src/app/model/maquina';
import { MaquinaService } from 'src/app/maquina/maquina.service';

@Component({
  selector: 'app-os-cadastrar',
  templateUrl: './os-cadastrar.component.html',
  styleUrls: ['./os-cadastrar.component.css']
})
export class OsCadastrarComponent implements OnInit {


  formulario!: FormGroup;
  maquina$!: Observable<Maquina[]>
  submitted = false;
  oficina: string[] = ['Calderaria', 'Eletrica', 'Mecanica']


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService,
    private maquinaService: MaquinaService,
    private osService: OsService
  ) { }

  ngOnInit() {

    this.maquina$ = this.maquinaService.list().pipe();

    this.formulario = this.formBuilder.group({

      problema: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      maquina: [null, Validators.required],
      oficina: [null, Validators.required]

    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.formulario.valid) {

      let os = new Os();

      os.maquina = this.formulario.value['maquina'];
      os.problema = this.formulario.value['problema'];
      os.oficina = this.formulario.value['oficina'];


      this.osService.salvarOs(os).subscribe(

        success => {

          this.formulario.reset();
          this.router.navigate(['os']);

        },
        erro => {



        }

      );
    }

  }

  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
