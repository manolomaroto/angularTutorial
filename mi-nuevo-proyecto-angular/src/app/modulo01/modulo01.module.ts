import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteDentroModuloComponent } from './componente-dentro-modulo/componente-dentro-modulo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponenteDentroModuloComponent],
  exports: [ComponenteDentroModuloComponent]
})
export class Modulo01Module { }
