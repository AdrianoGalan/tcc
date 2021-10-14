import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subscription, Observable, empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { Os } from "src/app/model/os";
import { AlertModalComponent } from "src/app/shared/alert-modal/alert-modal.component";
import { OsService } from "../os.service";

@Component({
  selector: "app-os-atualizar",
  templateUrl: "./os-atualizar.component.html",
  styleUrls: ["./os-atualizar.component.css"],
})
export class OsAtualizarComponent implements OnInit {
  os$!: Observable<Os>;
  os!: Os;
  inscricao: Subscription;
  formulario!: FormGroup;
  submitted = false;

  bsModalRef!: BsModalRef;

  constructor(
    private osService: OsService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params["id"];

      this.os$ = this.osService.getOs(id).pipe(
        catchError((error) => {
          this.handleError();
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
      oficina: [null, Validators.required]

    });

    this.os$.subscribe(
      o => {
        this.os = o;
        if(o){
          this.povoar();
        }
      }
    )

    console.log(this.os)
  }

  povoar() {

    this.formulario.get('id')?.setValue(this.os.id);
    this.formulario.get('sigla')?.setValue(this.os.maquina.sigla);
    this.formulario.get('problema')?.setValue(this.os.problema);
    
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = "danger";
    this.bsModalRef.content.message = "Erro ao carregar";
  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }
}
