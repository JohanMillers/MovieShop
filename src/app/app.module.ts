import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SearchComponent } from './Componentes/search/search.component';
import { NavbarComponent } from './Componentes/shared/navbar/navbar.component';
import { AuthService } from './Service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './Componentes/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TarjetasComponent } from './Componentes/tarjetas/tarjetas.component';
import { CutTextPipe } from './Pipes/cut-text.pipe';
import { NoImagenPipe } from './Pipes/no-imagen.pipe';
import { ViewComponent } from './Componentes/view/view.component';
import { SlideshowComponent } from './Componentes/slideshow/slideshow.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CarouselComponent,
    TarjetasComponent,
    CutTextPipe,
    NoImagenPipe,
    ViewComponent,
    SlideshowComponent,

    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCardModule,
    SwiperModule,
    RatingModule,
  ],
  providers: [
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
