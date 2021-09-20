import { SetorService } from './../../setor/setor.service';
import { MaquinaService } from './../maquina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/model/maquina';
import { Fabricante } from 'src/app/model/fabricante';
import { Setor } from 'src/app/model/setor';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SetorComponent } from 'src/app/setor/setor.component';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-maquina-cadastro',
  templateUrl: './maquina-cadastro.component.html',
  styleUrls: ['./maquina-cadastro.component.css']
})
export class MaquinaCadastroComponent implements OnInit {

  maquina!: Maquina;

  bsModalRef!: BsModalRef

  inscricao: Subscription;
  fabricante$!: Observable<Fabricante[]>;
  setor$!: Observable<Setor[]>;
  formulario!: FormGroup;
  novo: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private maquinaService: MaquinaService,
    private setorService: SetorService,
    private modalService: BsModalService
  ) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        if (id == null) {
          this.novo = true;
        } else {

          // this.maquinaService.getFuncionario(matricula).subscribe(
          //   f => {

          //     this.funcionario = f
          //     if (f) {
          //       this.povoar();
          //     }

          //   }
          // );

        }

      }
    );
  }

  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
      sigla: [null, [Validators.required, Validators.minLength(3)]],
      dataCompra: [null, Validators.required],
      fabricante: [null, Validators.required],
      setor: [null, Validators.required]

    });

    this.onRefresh();



  }

  onRefresh() {
    this.setor$ = this.setorService.list().pipe();

  }

  onSubmit(){
    
  }

  addSetor(){

    this.bsModalRef = this.modalService.show(SetorComponent);

  }

}
