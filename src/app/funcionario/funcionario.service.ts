import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = `${environment.API}funcionario`


  private funcao: string[] = ['Eletricista', 'Mecanico', 'Lubrificador', 'Coordenador', 'Supervisor']


  constructor(private http: HttpClient) {


    
  }

  list() {
    return this.http.get<Funcionario[]>(this.API).pipe(take(1));
  }

  getFuncionario(matricula: number){

    return this.http.get<Funcionario>(`${this.API}/${matricula}`).pipe(take(1))

  }

  atualizaFuncionario(funcionario: Funcionario){


    return this.http.post(this.API, JSON.stringify(funcionario), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }


}


