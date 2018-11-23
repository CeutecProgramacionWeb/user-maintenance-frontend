import { Component, OnInit } from '@angular/core';
import { RolService } from '../share/rol.service';
import { Rol } from '../share/models/rol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : Array<Rol>;
  createMode : boolean;
  nuevoRol : Rol;
  rolSeleccionado : Rol;

  constructor(private rolService :  RolService) {
    this.rolService = rolService;
    this.createMode = false;
  }

  ngOnInit() {
    this.rolService.getRoles()
    .subscribe((data : Array<Rol>) =>{
      this.roles = data;
    },error => {
      console.log(`Error ${error}`);
    });
  }

  crearRol() : void{
    this.createMode=true; 
    this.nuevoRol = new Rol();
    this.rolSeleccionado = null;
  }

  onCreate() : void{
    this.rolService.createRole(this.nuevoRol)
      .subscribe((data : Rol ) =>{
        this.roles.push(data);
        this.createMode = false;
      }, error => console.log("error "+ error));
  }

  onSelect(rol : Rol) : void{
      this.rolSeleccionado = rol;
  }
}
