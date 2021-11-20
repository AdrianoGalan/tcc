import { Funcao } from './../model/funcao';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = `${environment.API}funcionario`


  constructor(private http: HttpClient) {



  }

  list() {
    return this.http.get<Funcionario[]>(this.API).pipe(take(1));
  }

  busca(parametro: string){

    return this.http.get<Funcionario[]>(`${this.API}/busca/${parametro}`).pipe(take(1));

  }

  getFuncionario(matricula: number) {

    return this.http.get<Funcionario>(`${this.API}/${matricula}`).pipe(take(1))

  }

  salvarFuncionario(funcionario: Funcionario) {


    return this.http.post(this.API, JSON.stringify(funcionario), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }

  atualizarFuncionario(funcionario: Funcionario) {


    return this.http.put(this.API, JSON.stringify(funcionario), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }

  listFuncao() {

    return this.http.get<Funcao[]>(`${this.API}/funcao`).pipe(take(1));

  }

  delete(f: Funcionario) {

    return this.http.put(`${this.API}/delete/`, JSON.stringify(f), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1))

  }



}


