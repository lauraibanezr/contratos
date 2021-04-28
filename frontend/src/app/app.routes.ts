import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContratosListComponent } from './components/contratos-list/contratos-list.component';
import { ContratoAddComponent } from './components/contrato-add/contrato-add.component';

//import { PageNotFoundComponent } from './';

const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'con-list', component: ContratosListComponent },
    { path: 'con-add', component: ContratoAddComponent },
    { path: 'con-edit/:id_contrato', component: ContratoAddComponent},   
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    
    //{ path: '**', component: PageNotFoundComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);
