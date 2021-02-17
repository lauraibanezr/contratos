import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';


//Rutas
import {APP_ROUTING } from './app.routes';


//Servicios
import { ContratosService } from './services/contratos.service';



//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContratosListComponent } from './components/contratos-list/contratos-list.component';
import { ContratoAddComponent } from './components/contrato-add/contrato-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContratosListComponent,
    ContratoAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ContratosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
