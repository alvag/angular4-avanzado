import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { EmailModule } from './modules/email/email.module';
import { AdminModule } from './admin/admin.module';

// Rutas
import { app_routing } from './app.router';

// Servicios
import { SharedService } from './services/shared.service';

// Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { HeaderComponent } from './components/header/header.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule( {
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent,
    HeaderComponent,
    SimpleTinyComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    app_routing,
    EmailModule,
    AdminModule,
    HttpModule
  ],
  providers: [ SharedService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
