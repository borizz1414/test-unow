import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Auth } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User;
  private url = environment;

  get getUser() {
    return { ...this.user };
  }

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    const body: User = { email, password };

    //Envio de data
    // return this.httpClient.post<Auth>('url', body).pipe(
    //   tap((resp) => if(resp.ok) setToken(resp.token))
    //   map((resp) => resp.ok),
    //   catchError(err => of(false))
    //   );

    //Para simular
    if (email === 'test@gmail.com' && password === 'test') {
      this.setToken('wf8jh37cne043n8nv,xnsve75od,vnbe657ue6uhn5n4y4v83');
      return true;
    }else {
      return false;
    }

  }

  logout() {
    localStorage.removeItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }
}
