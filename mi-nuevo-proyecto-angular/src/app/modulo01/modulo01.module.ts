import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteDentroModuloComponent } from './componente-dentro-modulo/componente-dentro-modulo.component';
import { SiNoComponent } from './si-no/si-no.component';
import { RepeticionComponent } from './repeticion/repeticion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponenteDentroModuloComponent, SiNoComponent, RepeticionComponent],
  exports: [ComponenteDentroModuloComponent, SiNoComponent, RepeticionComponent]
})
export class Modulo01Module { }
