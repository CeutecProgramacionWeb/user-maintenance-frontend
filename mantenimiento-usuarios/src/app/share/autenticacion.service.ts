import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  login(usuario: LoginUser) {
    let data = `username=${usuario.userName}&password=${usuario.password}&grant_type=password`;

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post("https://stackoverflowcgvm.apphb.com/Token", data, { headers: headers });
  }
}

