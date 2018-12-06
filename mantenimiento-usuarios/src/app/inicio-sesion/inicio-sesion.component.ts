import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../share/models/login-user';
import { AutenticacionService } from '../share/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  loginUser: LoginUser;

  constructor(private autenticacionService: AutenticacionService, private router : Router) {
    this.autenticacionService = autenticacionService;
    this.router = router;
  }

  ngOnInit() {
    this.loginUser = new LoginUser();
  }

  login(): void {
    this.autenticacionService.login(this.loginUser)
      .subscribe((data : any) => {
        localStorage.setItem("Token", data.access_token);
        localStorage.setItem("username", data.userName);
        this.router.navigate(["/users"]);
      }, error => alert("Error"));
  }
}
