import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-cadastrar',
  templateUrl: './os-cadastrar.component.html',
  styleUrls: ['./os-cadastrar.component.css']
})
export class OsCadastrarComponent implements OnInit {

  today: any = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
