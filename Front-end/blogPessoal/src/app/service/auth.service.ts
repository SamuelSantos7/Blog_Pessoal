import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalsamuel.herokuapp.com/api/v1/usuario/autenticar', userLogin)
    
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoalsamuel.herokuapp.com/api/v1/usuario/cadastrar'
      ,user)
    
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }


    return ok
  }
}
