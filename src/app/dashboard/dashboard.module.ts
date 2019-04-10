import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';
import { MenuLateralModule } from '../menu-principal/menu/menu-lateral/menu-lateral.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    MenuLateralModule,
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
