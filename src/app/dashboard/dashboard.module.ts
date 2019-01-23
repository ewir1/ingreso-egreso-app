import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';

@NgModule({
  declarations: [
    IngresoEgresoComponent,
    DetalleComponent,
    EstadisticaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngresoEgresoComponent,
    DetalleComponent,
    EstadisticaComponent
  ]
})
export class DashboardModule { }
