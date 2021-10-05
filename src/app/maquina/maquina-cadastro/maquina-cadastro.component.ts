import { SetorService } from './../../setor/setor.service';
import { MaquinaService } from './../maquina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/model/maquina';
import { Fabricante } from 'src/app/model/fabricante';
import { Setor } from 'src/app/model/setor';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SetorComponent } from 'src/app/setor/setor.component';
import { catchError } from 'rxjs/operators';
import { FabricanteComponent } from 'src/app/fabricante/fabricante.component';
import { FabricanteService } from 'src/app/fabricante/fabricante.service';


@Component({
  selector: 'app-maquina-cadastro',
  templateUrl: './maquina-cadastro.component.html',
  styleUrls: ['./maquina-cadastro.component.css']
})
export class MaquinaCadastroComponent implements OnInit {

  maquina!: Maquina;
  submitted = false;
  bsModalRef!: BsModalRef

  inscricao: Subscription;
  fabricante$!: Observable<Fabricante[]>;
  setor$!: Observable<Setor[]>;
  formulario!: FormGroup;
  novo: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private maquinaService: MaquinaService,
    private setorService: SetorService,
    private fabricanteService: FabricanteService,
    private modalService: BsModalService
  ) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let sigla = params['sigla'];

        if (sigla == null) {
          this.novo = true;
          this.maquina = new Maquina();
        } else {

          this.maquinaService.getMaquina(sigla).subscribe(
            m => {

              this.maquina = m
              if (m) {
                this.povoar();
              }

            }
          );

        }

      }
    );
  }

  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
      sigla: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      dataCompra: [null, Validators.required],
      fabricante: [null, Validators.required],
      setor: [null, Validators.required]

    });

    this.onRefresh();



  }

  onRefresh() {
    this.setor$ = this.setorService.list().pipe();
    this.fabricante$ = this.fabricanteService.list().pipe();

  }

  povoar() {

    this.onRefresh();

    this.formulario.get('sigla')?.setValue(this.maquina.sigla);
    this.formulario.get('dataCompra')?.setValue(this.maquina.dataCompra);
    this.formulario.get('fabricante')?.setValue(this.maquina.fabricante);
    this.formulario.get('setor')?.setValue(this.maquina.setor);
  }

  onSubmit() {

    this.submitted = true;



    if (this.formulario.valid) {
      this.maquina.sigla = this.formulario.value['sigla'];
      this.maquina.dataCompra = this.formulario.value['dataCompra'];
      this.maquina.setor = this.formulario.value['setor'];
      this.maquina.fabricante = this.formulario.value['fabricante'];

      this.maquinaService.salvarMaquina(this.maquina).subscribe(
        success => {
          this.formulario.reset();
          this.router.navigate(["/maquina"])
          
        },
        erro => {

          console.log(erro);
        }
      );

    }
  }

  addSetor() {

    this.bsModalRef = this.modalService.show(SetorComponent);

  }

  comparar(obj1: any, obj2: any){
    return obj1 && obj2 ? (obj1.id === obj2.id) : obj1 === obj2;
  }


  addFabricante() {

    this.bsModalRef = this.modalService.show(FabricanteComponent);

  }

  hasError(field: string) {


    return this.formulario.get(field)?.errors

  }

}
