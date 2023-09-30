import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environments';

const url=environment.localUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

   
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    
    return this.http.post(
      url + '/login',{
        username,
        password,
      }, httpOptions
    );
  }
}
