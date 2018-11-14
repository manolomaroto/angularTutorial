import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dentro-modulo',
  templateUrl: './componente-dentro-modulo.component.html',
  styleUrls: ['./componente-dentro-modulo.component.css']
})
export class ComponenteDentroModuloComponent implements OnInit {

  classValue = "class1";

  cambiaClase() {
    this.classValue = "class2";
  }
  constructor() { }

  ngOnInit() {
  }

}
