import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {InputTextModule} from 'primeng-lts/inputtext';
import {TabViewModule} from 'primeng-lts/tabview';
import {CalendarModule} from 'primeng-lts/calendar';
import {InputNumberModule} from 'primeng-lts/inputnumber';
import {AccordionModule} from 'primeng-lts/accordion';
import {FullCalendarModule} from 'primeng-lts/fullcalendar';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { Ofi53Component } from './Components/ofisadmin/ofi53/ofi53.component';
import { Ofi52Component } from './Components/ofisadmin/ofi52/ofi52.component';
import { Ofi51Component } from './Components/ofisadmin/ofi51/ofi51.component';
import { UsuariosComponent } from './Components/mantenimientos/usuarios/usuarios.component';
import { SalasComponent } from './Components/mantenimientos/salas/salas.component';
import { ReservasComponent } from './Components/reservas/reservas.component';
import { PluginsComponent } from './Components/plugins/plugins.component';
import { Page404Component } from './Components/page404/page404.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';


const routes: Routes = [
   {path: '', component: LoginComponent, pathMatch: 'full'},
   {path: 'admin', component: AdminComponent},
   {path: 'salas', component: SalasComponent},
   {path: 'usuarios', component: UsuariosComponent},
   {path: 'reservas', component: ReservasComponent},
   {path: 'plugins', component: PluginsComponent},
   {path: 'page404', component: Page404Component}
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
    SalasComponent,
    ReservasComponent,
    PluginsComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    TabViewModule,
    CalendarModule,
    InputNumberModule,
    AccordionModule,
    NgxMaterialTimepickerModule,
    FullCalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
