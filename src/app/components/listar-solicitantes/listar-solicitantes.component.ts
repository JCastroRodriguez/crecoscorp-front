import { Component, OnInit, ViewChild } from '@angular/core';
import { Alertas } from 'src/utilitarios/alertas';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-solicitantes',
  templateUrl: './listar-solicitantes.component.html',
  styleUrls: ['./listar-solicitantes.component.css'],
  providers: [DatePipe]
})
export class ListarSolicitantesComponent implements OnInit {

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();

  constructor() {

  }

  ngOnInit() {


  }


  grabar() {

  }

}