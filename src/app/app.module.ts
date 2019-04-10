import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JwtRequestService } from './jwt-request.service';

import { AppComponent } from './app.component';
import { ControlInternoModule } from './control-interno/control-interno.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { MenuLateralModule } from './menu-principal/menu/menu-lateral/menu-lateral.module';
import { InventarioModule } from './inventario/inventario.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ControlInternoModule,
    DashboardModule,
    MenuPrincipalModule,
    MenuLateralModule,
    BrowserAnimationsModule,
    InventarioModule
  ],
  providers: [
    Title,
    JwtRequestService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
