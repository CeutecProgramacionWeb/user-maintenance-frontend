import { Component, OnInit } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';
import { Rol } from '../share/models/rol';
import { RolService } from '../share/rol.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios:Array<Usuario>;
  createMode : boolean;
  nuevoUsuario : Usuario;
  usuarioSeleccionado : Usuario
  roles : Array<Rol>;

  constructor(private usuarioService:UsuarioService, private roleService : RolService) {
    this.usuarioService = usuarioService;
    this.createMode = false;
   }

   crearUsuario() : void{
    this.createMode=true; 
    this.nuevoUsuario = new Usuario();
    this.usuarioSeleccionado = null;
  }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe((data: Array<Usuario>)=>{
        this.usuarios = data;
    },error =>{
      console.log("Error " + error);
    });

    this.roleService.getRoles()
    .subscribe((data : Array<Rol>) => this.roles = data,
    error => console.log("Error " + error));
  }

  onCreate() : void{
    this.nuevoUsuario.roleId = Number(this.nuevoUsuario.roleId);
    this.usuarioService.createUser(this.nuevoUsuario)
      .subscribe((data : Usuario) => {
        this.usuarios.push(data);
        this.createMode = false;
      }, error => console.log("Error " + error));
  }

}
