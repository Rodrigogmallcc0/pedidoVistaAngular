import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido.component';
import { LoginComponentComponent } from './components/Auth/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ProfileComponentComponent,
    AdminComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
