import { Component, OnInit } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Array<Usuario>;
  
  constructor(private usuarioService:UsuarioService) {
    this.usuarioService = usuarioService;
   }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe((data: Array<Usuario>)=>{
        this.usuarios = data;
    },error =>{
      console.log("Error " + error);
    });
  }

}
