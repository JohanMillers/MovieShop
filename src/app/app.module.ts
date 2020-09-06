import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SearchComponent } from './Componentes/search/search.component';
import { NavbarComponent } from './Componentes/shared/navbar/navbar.component';
import { CallbackComponent } from './Componentes/callback/callback.component';
import { AuthService } from './Service/auth.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
