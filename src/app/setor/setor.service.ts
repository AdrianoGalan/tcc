import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  
  private readonly API = `${environment.API}setor`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Setor[]>(this.API).pipe(take(1));
  }

  salvarSetor(setor: Setor) {

    return this.http.post(this.API, JSON.stringify(setor), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));
  }
}
