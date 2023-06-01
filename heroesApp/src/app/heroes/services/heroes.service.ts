import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _url: string = environment.baseUrl

  constructor(private _http: HttpClient) {

  }

  getHeroes(): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${this._url}/heroes`)
  }

  getHeroeId(id: string): Observable<Heroe> {
    console.log(id)
    return this._http.get<Heroe>(`${this._url}/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${this._url}/heroes?q=${termino}&_limit=6`)//la q especifica las letras que quiere buscar y el limit el limite de resultados
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this._http.post<Heroe>(`${this._url}/heroes`, heroe)
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this._http.put<Heroe>(`${this._url}/heroes/${heroe.id}`, heroe)
  }

  elminarHeroe(id: string): Observable<any> {
    return this._http.delete<any>(`${this._url}/heroes/${id}`)
  }
}
