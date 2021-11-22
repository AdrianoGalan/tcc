import { MaquinaService } from './../maquina/maquina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MaquinaService) { }

  ngOnInit(): void {
  }

  previsao(sigla: string) {
    this.service.getArquivo(sigla);
  }

}
