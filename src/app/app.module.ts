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

const routes: Routes = [
   {path: '', component: LoginComponent, pathMatch: 'full'},
   {path: 'admin', component: AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
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
