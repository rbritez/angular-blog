import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './global.service';


@Injectable()
export class CategoryService{

  public url: string;
  public data: any;
  public token: any;

  constructor(
    public http: HttpClient,
  ){
    this.url = global.url;
  }
  save(token: any, category: any): Observable<any>{
    const json = JSON.stringify(category); // obtengo los datos del formulario
    const params = 'json=' + json; // agregos datos json al atributo json para enviar a la API.
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token); // creo el encabezado
    // envio los datos a la API
    return this.http.post(this.url + 'category', params, {headers}) ;
  }
  getCategories(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(this.url + 'category', {headers});
  }
}
