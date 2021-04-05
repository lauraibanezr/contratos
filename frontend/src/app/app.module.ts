import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator'; 

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
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMatPaginatorIntl } from './paginator-es';
import { HighlightSearch  } from './pipes/highlight.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContratosListComponent,
    ContratoAddComponent,
    PaginatePipe,
    HighlightSearch 
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    ContratosService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
