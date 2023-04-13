import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { TrabalhoFotosComponent } from './components/trabalho-fotos/trabalho-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrabalhoFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }