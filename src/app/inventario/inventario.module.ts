import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { InsumosComponent } from './insumos/insumos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RelacionComponent } from './relacion/relacion.component';
import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';
import { MenuLateralModule } from '../menu-principal/menu/menu-lateral/menu-lateral.module';
import { InventarioService } from './inventario.service';

@NgModule({
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MenuPrincipalModule,
    MenuLateralModule
  ],
  providers:
  [
    InventarioService
  ],
  declarations: [InventarioComponent, InsumosComponent, ProveedoresComponent, RelacionComponent]
})
export class InventarioModule { }
