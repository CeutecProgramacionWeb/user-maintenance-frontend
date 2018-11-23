import { Component, OnInit, Input } from '@angular/core';
import { Rol } from '../share/models/rol';
import { HttpClient } from '@angular/common/http';
import { RolService } from '../share/rol.service';

@Component({
  selector: 'app-detalle-rol',
  templateUrl: './detalle-rol.component.html',
  styleUrls: ['./detalle-rol.component.css']
})
export class DetalleRolComponent implements OnInit {

  @Input()
  rol : Rol;

  constructor(private rolService: RolService) {
    this.rolService = rolService;
   }

  ngOnInit() {
  }

  onEdit() : void{
    this.rolService.editRole(this.rol)
      .subscribe((data : Rol) => {
        this.rol = null;
      }, error => console.log("error " + error));
  }

}
