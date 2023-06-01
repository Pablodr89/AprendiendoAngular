import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { Observable, tap, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url: string = environment.baseUrl
  private _auth: Auth | undefined

  get auth(): Auth {
    return {...this._auth!}
  }

  constructor(private _http: HttpClient) {

  }

  verificarAuth(): Observable<boolean>  {
    if(!localStorage.getItem('id')) {
      return of(false)
    }
    return this._http.get<Auth>(`${this._url}/usuarios/1`).pipe(
      map(
        auth => {
          this._auth = auth
          return true
        }
      )
    )
  }

  login() {
    return this._http.get<Auth>(`${this._url}/usuarios/1`).pipe(
      tap(auth => this._auth = auth),
      tap(auth => localStorage.setItem('id',auth.id)),//guarda el id en el localStorage
    )
  }

  logout() {
    localStorage.clear()
  }
}
