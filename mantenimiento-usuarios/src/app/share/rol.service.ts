import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from './models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(public http : HttpClient) { 
    this.http = http;
  }

  getRoles(){
    return this.http.get("http://localhost:8080/api/roles");
  }

  createRole(rol : Rol){
    return this.http.post("http://localhost:8080/api/roles", rol);
  }

  editRole(rol : Rol){
    return this.http.put("http://localhost:8080/api/roles/" + rol.id, rol);
  }
}
