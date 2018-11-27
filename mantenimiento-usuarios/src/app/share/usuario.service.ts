import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  getUsuarios(){
    return this.http.get('http://localhost:8080/api/users');
  }

  createUser(usuario : Usuario){
    return this.http.post('http://localhost:8080/api/users', usuario);
  }
}
