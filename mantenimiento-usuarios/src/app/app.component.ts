import { Component } from '@angular/core';
import { AutenticacionService } from './share/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mantenimiento-usuarios';
  
  /**
   *
   */
  constructor(private autenticacionService : AutenticacionService) {
      this.autenticacionService = autenticacionService;
  }

}
