import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si-no',
  templateUrl: './si-no.component.html',
  styleUrls: ['./si-no.component.css']
})
export class SiNoComponent implements OnInit {

  texto: string = "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ? "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo;
  }

  constructor() { }

  ngOnInit() {
  }

}
