import { Usuario } from './../model/usuario';
import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuario`

  constructor(private http: HttpClient) {



  }

  list() {
    return this.http.get<Usuario[]>(this.API).pipe(take(1));
  }

  getUsuario(id: number) {

    return this.http.get<Usuario[]>(`${this.API}/${id}`).pipe(take(1))

  }

  deleteUsuario(u: Usuario) {

    console.log(`${this.API}/delete/${u}`)

    return this.http.delete(`${this.API}/delete/${u}`,{responseType: 'text' }).pipe(take(1))

  }

  salvarUsuario(u: Usuario){

    return this.http.post(this.API, JSON.stringify(u), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }
}
