import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subscription, Observable, empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { FuncionarioService } from "src/app/funcionario/funcionario.service";
import { Funcionario } from "src/app/model/funcionario";
import { Os } from "src/app/model/os";
import { AlertModalComponent } from "src/app/shared/alert-modal/alert-modal.component";
import { OsService } from "../os.service";

@Component({
  selector: 'app-os-finalizar',
  templateUrl: './os-finalizar.component.html',
  styleUrls: ['./os-finalizar.component.css']
})
export class OsFinalizarComponent implements OnInit {

  funcionarios$!: Observable<Funcionario[]>;
  os$!: Observable<Os>;
  os!: Os;
  inscricao: Subscription;
  formulario!: FormGroup;
  submitted = false;

  bsModalRef!: BsModalRef;

  constructor(
    private osService: OsService,
    private funcionarioService: FuncionarioService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params["id"];

      this.os$ = this.osService.getOs(id).pipe(
        catchError((error) => {
          this.handleError("Erro ao carregar");
          this.router.navigate(["os"]);
          return empty();
        })
      );
    });
  }

  ngOnInit(): void {



    this.formulario = this.formBuilder.group({

      problema: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      id: [null, Validators.required],
      sigla: [null, Validators.required],
      defeito: [null, Validators.required],
      funcionario: [null, Validators.required],
      reparo: [null, Validators.required],
      iniReparoDate: [null, Validators.required],
      iniReparoTime: [null, Validators.required],
      fimReparoTime: [null, Validators.required],
      fimReparoDate: [null, Validators.required]

    });

    this.os$.subscribe(
      o => {
        this.os = o;
        if (o) {
          this.povoar();
        }
      }
    )

    this.funcionarios$ = this.funcionarioService.list();
    
  }

  onSubmit() {

    this.submitted = true;
  

    if(this.formulario.valid){

      let dataInicio: string
      let dataFim: string
  
      dataInicio = this.formulario.value['iniReparoDate'] + " " + this.formulario.value['iniReparoTime'];
      dataFim = this.formulario.value['fimReparoDate'] + " " + this.formulario.value['fimReparoTime'];
  
      this.os.defeito = this.formulario.value['defeito'];
      this.os.manutentor = this.formulario.value['funcionario'];
      this.os.problema = this.formulario.value['problema'];
      this.os.reparo = this.formulario.value['reparo'];
      this.os.dataIniManutencao = dataInicio;
      this.os.dataFimManutencao = dataFim;
      this.os.statusOs = 'C'

      this.osService.salvarOs(this.os).subscribe(

        success => {

          this.formulario.reset();
          this.router.navigate(['os']);

        },
        erro => {

          this.handleError("Erro ao salvar Os");

        }

      );

    }


  }

  comparar(obj1: Funcionario, obj2: Funcionario) {
    return obj1 && obj2 ? (obj1.matricula === obj2.matricula) : obj1 === obj2;
  }

  povoar() {

    this.formulario.get('id')?.setValue(this.os.id);
    this.formulario.get('sigla')?.setValue(this.os.maquina.sigla);
    this.formulario.get('problema')?.setValue(this.os.problema);

  }

  handleError(msg: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = msg;
  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }

}
