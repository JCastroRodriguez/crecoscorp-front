import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-registro-solicitante',
  templateUrl: './registro-solicitante.component.html',
  styleUrls: ['./registro-solicitante.component.css']
})
export class RegistroSolicitanteComponent implements OnInit {

  //inputElement = document.getElementById('firstname') as HTMLInputElement;

  //formSolicitante: FormGroup;

  displayedColumns: string[] = ['CUOTA', 'CAPITAL', 'INTERES', 'DIVIDENDO', 'SALDO', 'FECHA', 'ESTADO'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder,
  ) {
    /*this.formSolicitante = this.fb.group({
      nombreSolicitante: new FormControl('', [Validators.required]),
      apellidoSolicitante: new FormControl('', [Validators.required]),
      celularSolicitante: new FormControl('', [Validators.required]),
      emailSolicitante: new FormControl('', [Validators.required]),
      tipoIdenSolicitante: new FormControl('', [Validators.required]),
      identificacionSolicitante: new FormControl('', [Validators.required]),
      usuarioSolicitante: new FormControl('', [Validators.required]),
      claveSolicitante: new FormControl('', [Validators.required]),
      provinciaSolicitante: new FormControl('', [Validators.required]),
      sectorSolicitante: new FormControl('', [Validators.required]),
    });*/
  }

  
   

  ngOnInit(): void {
    //const inputValue = this.inputElement.value;
    //console.log(inputValue);
  }

}
