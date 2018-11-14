import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteDentroModuloComponent } from './componente-dentro-modulo/componente-dentro-modulo.component';
import { SiNoComponent } from './si-no/si-no.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponenteDentroModuloComponent, SiNoComponent],
  exports: [ComponenteDentroModuloComponent, SiNoComponent]
})
export class Modulo01Module { }
