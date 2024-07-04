import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewUser, User, userResponse } from '../shared/interfaces/User';
import { baseUrl } from '../../assets/constantes';
import { tap } from 'rxjs';

const url = baseUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?
  : userResponse

  constructor(private http: HttpClient) {}

  get currentUser():User|undefined {
    if ( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  register(newUser:NewUser) {

    this.http.post(`${url}auth/register`, newUser).subscribe( resp => {
      console.log('resp', resp);
    })
  }



  login(user: User): Observable<userResponse>{
    return this.http.post<userResponse>(`${url}auth/login`,user)
    .pipe(
      tap( user => this.user = user ),
      tap( user => localStorage.setItem('token', user.token )),
    );
  }



  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
