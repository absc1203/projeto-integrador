import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';


//CRIANDO OS END POINTS IGUAIS AOS ESCRITOS NO CONTROLLER
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    entrar(userLogin: UserLogin): Observable<UserLogin>{ //garantindo que receberei um user
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
    }

    cadastrar(user: User): Observable<User>{
      return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
    }
}
