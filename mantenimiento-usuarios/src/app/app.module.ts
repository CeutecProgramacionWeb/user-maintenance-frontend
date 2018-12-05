import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetalleRolComponent } from './detalle-rol/detalle-rol.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


const routes : Routes = [
  { path: "", redirectTo: "users", pathMatch: "full"},
  { path: "login", component: InicioSesionComponent},
  { path: "users", component: UsuariosComponent},
  { path: "roles", component: RolesComponent},
  { path: "roles/:id", component: DetalleRolComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    DetalleRolComponent,
    UsuariosComponent,
    PageNotFoundComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
