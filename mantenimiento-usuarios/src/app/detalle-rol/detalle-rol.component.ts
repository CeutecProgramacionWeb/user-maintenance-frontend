import { Component, OnInit, Input } from '@angular/core';
import { Rol } from '../share/models/rol';
import { HttpClient } from '@angular/common/http';
import { RolService } from '../share/rol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-rol',
  templateUrl: './detalle-rol.component.html',
  styleUrls: ['./detalle-rol.component.css']
})
export class DetalleRolComponent implements OnInit {

  rol : Rol;

  constructor(private rolService: RolService, private route: ActivatedRoute) {
    this.rolService = rolService;
    this.route = route;
   }

  ngOnInit() {
    this.route.paramMap
    .subscribe(parameters => {
      debugger;
      let id =  Number(parameters.get("id"));
      this.getRole(id);
    });
  }

  getRole(id : number){
    this.rolService.getRole(id)
      .subscribe((data : Rol) => this.rol = data);
  }

  onEdit() : void{
    this.rolService.editRole(this.rol)
      .subscribe((data : Rol) => {
        this.rol = null;
      }, error => console.log("error " + error));
  }

}
