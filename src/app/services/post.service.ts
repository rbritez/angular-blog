import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './global.service';

@Injectable()
export class PostService{
  public url: string;
  public token: any;

  constructor(
    public http: HttpClient,
  ){
    this.url = global.url;
  }

  save(token: any, post: any): Observable<any>{

    const json = JSON.stringify(post);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token);
    return this.http.post(this.url + 'post', params, {headers} );
  }
}

