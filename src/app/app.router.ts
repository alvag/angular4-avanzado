import { Routes, RouterModule } from "@angular/router";

import {
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent
} from "./components/index.components";

const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', pathMatch: 'full', redirectTo: '' },
    { path: 'home', component: HomeComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'cuidadores', component: KeeperComponent },
    { path: 'parques', component: ParquesComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
