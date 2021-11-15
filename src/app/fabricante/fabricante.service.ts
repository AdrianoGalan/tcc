import { environment } from './../../environments/environment';
import { take } from 'rxjs/operators';
import { Fabricante } from './../model/fabricante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = `${environment.API}fabricante`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Fabricante[]>(this.API).pipe(take(1));
  }

  salvarFabricante(fabricante: Fabricante) {

    return this.http.post(this.API, JSON.stringify(fabricante), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }
}
