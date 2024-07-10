import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { NewUser, User, userResponse } from '../shared/interfaces/User';
import { baseUrl } from '../../assets/constantes';
import { tap } from 'rxjs';

const url = baseUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin:boolean = false
  @Output()
  loginEmitter = new EventEmitter<boolean>();



  private user?: NewUser

  constructor(private http: HttpClient) {}

  cambiosPersona(islog:boolean) {
    this.loginEmitter.emit(islog);
  }



  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  register(newUser:NewUser) {

    return this.http.post(`${url}auth/register`, newUser)
  }
  // this.login({email: newUser.email, password: newUser.password})



  login(user: User): Observable<userResponse>{
    return this.http.post<userResponse>(`${url}auth/login`,user)
    .pipe(
      tap( user => this.user = user.user ),
      tap( user => localStorage.setItem('token', user.token )),
      tap( user => {
        localStorage.setItem('user', JSON.stringify(user.user) )
        this.cambiosPersona(true)
      }
      ),
    );
  }



  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
