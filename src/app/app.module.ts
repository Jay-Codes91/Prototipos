import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {InputTextModule} from 'primeng-lts/inputtext';
import {TabViewModule} from 'primeng-lts/tabview';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { Ofi53Component } from './Components/ofisadmin/ofi53/ofi53.component';
import { Ofi52Component } from './Components/ofisadmin/ofi52/ofi52.component';
import { Ofi51Component } from './Components/ofisadmin/ofi51/ofi51.component';
import { UsuariosComponent } from './Components/mantenimientos/usuarios/usuarios.component';
import { SalasComponent } from './Components/mantenimientos/salas/salas.component';

const routes: Routes = [
   {path: '', component: LoginComponent, pathMatch: 'full'},
   {path: 'admin', component: AdminComponent},
   {path: 'salas', component: SalasComponent},
   {path: 'usuarios', component: UsuariosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    Ofi53Component,
    Ofi52Component,
    Ofi51Component,
    UsuariosComponent,
    SalasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    TabViewModule,
    NgxMaterialTimepickerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
