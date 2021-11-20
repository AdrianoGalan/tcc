import { take } from "rxjs/operators";
import { Os } from "./../model/os";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class OsService {
  private readonly API = `${environment.API}os`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Os[]>(this.API).pipe(take(1));
  }

  busca(parametro: string){

    return this.http.get<Os[]>(`${this.API}/busca/${parametro}`).pipe(take(1));

  }

  salvarOs(os: Os) {
    return this.http
      .post(this.API, JSON.stringify(os), {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        responseType: "text",
      })
      .pipe(take(1));
  }

  getOs(id: number) {
    return this.http.get<Os>(`${this.API}/${id}`).pipe(take(1));
  }
}
