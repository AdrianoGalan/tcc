import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Maquina } from '../model/maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private readonly API = `${environment.API}maquina`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Maquina[]>(this.API).pipe(take(1));
  }

  salvarMaquina(maquina: Maquina) {

    return this.http.post(this.API, JSON.stringify(maquina), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }

  getMaquina(sigla: string) {

    return this.http.get<Maquina>(`${this.API}/${sigla}`).pipe(take(1))

  }
}
