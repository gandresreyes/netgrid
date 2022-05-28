import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HeaderComponent,
    FotterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
