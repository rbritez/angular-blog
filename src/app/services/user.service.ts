import { global } from './global.service';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

  public url: string;
  public identity: any;
  public token: any;

  constructor(
    /**
     * _http
     */
    public http: HttpClient
  ){
    this.url = global.url;
  }
  /*
  test(){
    return "Hola mundo desde el servicio usuario";
  }
  */
  register(user: any): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post(this.url + 'register', params, { headers} );

  }
  singup(user: any , getToken = null): Observable<any>{
    if (getToken != null){
      user.gettoken = 'true';
    }
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.url + 'login', params, {headers} );
  }
  update(token: any, user: any): Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this.http.put(this.url + 'user/update', params, {headers} );
  }
  getIdentity(): any{
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }
  getToken(): any{
    const token = localStorage.getItem('token');
    if (token){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
/*
User

*/
