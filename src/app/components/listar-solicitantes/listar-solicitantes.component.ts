import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, MinLengthValidator, MinValidator } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { Alertas } from 'src/utilitarios/alertas';
import { CiRucManager } from 'src/app/tools/ci-ruc-manager';

@Component({
  selector: 'app-listar-solicitantes',
  templateUrl: './listar-solicitantes.component.html',
  styleUrls: ['./listar-solicitantes.component.css'],
})
export class ListarSolicitantesComponent implements OnInit {

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();
  public validId: boolean = false;
  
  isLinear = false;
  solicitanteFormGroup: FormGroup;
  garanteFormGroup: FormGroup;
  creditoFormGroup: FormGroup;

  displayedColumns: string[] = ['CUOTA', 'CAPITAL', 'INTERES', 'DIVIDENDO', 'SALDO', 'FECHA', 'ESTADO'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private _formBuilder: FormBuilder) {
    this.solicitanteFormGroup = this._formBuilder.group({
      nombreSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      apellidoSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      celularSolicitante: [0, [Validators.required, Validators.min(10)]],
      emailSolicitante: ['', [Validators.required, Validators.email]],
      sectorSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      tipoIdentificacionSolicitante: ['', Validators.required],
      identificacionSolicitante: ['', Validators.required],
      usuarioSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      claveSolicitante: ['',[Validators.required, Validators.minLength(3)]],
    });

    this.garanteFormGroup = this._formBuilder.group({
      nombreGarante: ['', [Validators.required, Validators.minLength(3)]],
      apellidoGarante: ['', [Validators.required, Validators.minLength(3)]],
      celularGarante: ['', [Validators.required, Validators.minLength(10)]],
      emailGarante: ['', [Validators.required, Validators.email]],
      sectorGarante: ['', [Validators.required, Validators.minLength(3)]],
      identificacionGarante: ['', Validators.required],
    });

    this.creditoFormGroup = this._formBuilder.group({
      montoCredito: ['', Validators.required],
      interesCredito: ['', Validators.required],
      cuotasCredito: ['', Validators.required],
      //fechaCredito: ['', Validators.required],
    });

  }

  ngOnInit() {



  }


  grabar() {
    console.log(this.solicitanteFormGroup)
    console.log(this.solicitanteFormGroup.valid)

    if (this.solicitanteFormGroup.valid) {
      if(!this.validId){
        this.alertas.ToastError('Ingrese una identificación válida');
        return;
      }
    } else {
      this.alertas.ToastError('Por favor ingresar los datos obligatorios marcados en rojo.');
      return;
    }
    console.log("******************************")
    console.log(this.garanteFormGroup)
    console.log(this.garanteFormGroup.valid)
    console.log("******************************")
    console.log(this.creditoFormGroup)
    console.log(this.creditoFormGroup.valid)
    console.log("******************************")
  }

  /**
   * METODO PARA VALIDAR LA IDENTIFICACION DE UN USUARIO
   * 
   */
   public validateId() {
    if(this.solicitanteFormGroup.get('tipoIdentificacionSolicitante')?.value == 1){
      this.validId = CiRucManager.validarCiRuc(this.solicitanteFormGroup.get('identificacionSolicitante')?.value, this.solicitanteFormGroup.get('tipoIdentificacionSolicitante')?.value == "2");
    }
  }

}
