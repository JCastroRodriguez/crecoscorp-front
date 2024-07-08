import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, MinLengthValidator, MinValidator } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { Alertas } from 'src/utilitarios/alertas';
import { CiRucManager } from 'src/app/tools/ci-ruc-manager';
import { DatePipe } from '@angular/common';

class Cuota {
  numeroCuota!: number;
  capital!: number;
  interes!: number;
  dividendo!: number;
  saldoCapital!: number;
  fechaPago!: String;
  estado!: number
}
@Component({
  selector: 'app-listar-solicitantes',
  templateUrl: './listar-solicitantes.component.html',
  styleUrls: ['./listar-solicitantes.component.css'],
  providers: [DatePipe]
})
export class ListarSolicitantesComponent implements OnInit {

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();
  public validaCedulaSolicitante: boolean = false;
  public validaCedulaGarante: boolean = false;

  listaCuotas: Cuota[] = [];

  @ViewChild('stepper') private stepper!: MatStepper;

  isLinear = false;
  solicitanteFormGroup: FormGroup;
  garanteFormGroup: FormGroup;
  creditoFormGroup: FormGroup;

  displayedColumns: string[] = ['CUOTA', 'CAPITAL', 'INTERES', 'DIVIDENDO', 'SALDO', 'FECHA', 'ESTADO'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  interes! : number;
  total! : number;
  //fechaActual = this.datePipe.transform(new Date(), "dd/MM/yyyy");

  constructor(
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
    ) {

    this.solicitanteFormGroup = this._formBuilder.group({
      nombreSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      apellidoSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      celularSolicitante: [0, [Validators.required, Validators.minLength(10)]],
      emailSolicitante: ['', [Validators.required, Validators.email]],
      provinciaSolicitante: ['', Validators.required],
      sectorSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      tipoIdentificacionSolicitante: ['', Validators.required],
      identificacionSolicitante: ['', Validators.required],
      usuarioSolicitante: ['', [Validators.required, Validators.minLength(3)]],
      claveSolicitante: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.garanteFormGroup = this._formBuilder.group({
      nombreGarante: ['', [Validators.required, Validators.minLength(3)]],
      apellidoGarante: ['', [Validators.required, Validators.minLength(3)]],
      celularGarante: [0, [Validators.required, Validators.minLength(10)]],
      emailGarante: ['', [Validators.required, Validators.email]],
      provinciaGarante: ['', Validators.required],
      sectorGarante: ['', [Validators.required, Validators.minLength(3)]],
      tipoIdentificacionGarante: ['', Validators.required],
      identificacionGarante: ['', Validators.required],
    });

    this.creditoFormGroup = this._formBuilder.group({
      montoCredito: [0, Validators.required],
      interesCredito: [0, Validators.required],
      cuotasCredito: [0, Validators.required],
      formaPago: ['', Validators.required],
      //fechaCredito: [this.fechaActual, Validators.required],
    });

  }

  ngOnInit() {


  }


  grabar() {
   
  }

  /**
   * METODO PARA VALIDAR LA IDENTIFICACION DE UN USUARIO
   * 
   */
  public validateId() {
    if (this.solicitanteFormGroup.get('tipoIdentificacionSolicitante')?.value == 1 ||
      this.solicitanteFormGroup.get('tipoIdentificacionSolicitante')?.value == 2) {
      this.validaCedulaSolicitante = CiRucManager.validarCiRuc(this.solicitanteFormGroup.get('identificacionSolicitante')?.value, this.solicitanteFormGroup.get('tipoIdentificacionSolicitante')?.value == "2");
    }

    if (this.garanteFormGroup.get('tipoIdentificacionGarante')?.value == 1 ||
      this.garanteFormGroup.get('tipoIdentificacionGarante')?.value == 2) {
      this.validaCedulaGarante = CiRucManager.validarCiRuc(this.garanteFormGroup.get('identificacionGarante')?.value, this.garanteFormGroup.get('tipoIdentificacionGarante')?.value == "2");
    }
  }

  validarSolicitante() {
    if (this.solicitanteFormGroup.valid) {
      if (!this.validaCedulaSolicitante) {
        this.alertas.ToastError('la cédula o ruc del solicitante no es válido');
        return;
      }
      this.stepper.next();
    } else {
      this.alertas.ToastError('Por favor ingresar los datos descritos como (requerido)*');
      return;
    }
  }

  validarGarante() {
    if (this.garanteFormGroup.valid) {
      if (!this.validaCedulaGarante) {
        this.alertas.ToastError('la cédula o ruc del garante no es válido');
        return;
      }
      this.stepper.next();
    } else {
      this.alertas.ToastError('Por favor ingresar los datos descritos como (requerido)*');
      return;
    }
  }

  validarCredito() {
    this.listaCuotas = [];
    if (this.creditoFormGroup.valid) {
      if (this.creditoFormGroup.get('montoCredito')?.value <= 0) {
        this.alertas.ToastError('el monto no puede ser cero');
        return;
      }
      if (this.creditoFormGroup.get('interesCredito')?.value <= 0) {
        this.alertas.ToastError('el interes % no puede ser cero');
        return;
      }
      if (this.creditoFormGroup.get('cuotasCredito')?.value <= 0) {
        this.alertas.ToastError('el # de cuota no puede ser cero');
        return;
      }
    } else {
      this.alertas.ToastError('Por favor ingresar los datos descritos como (requerido)*');
      return;
    }

    let capital = this.creditoFormGroup.get('montoCredito')?.value / this.creditoFormGroup.get('cuotasCredito')?.value;
    let porcentaje = this.creditoFormGroup.get('interesCredito')?.value / 100;
    this.interes = porcentaje * this.creditoFormGroup.get('montoCredito')?.value;
    let interesParcial = this.interes / this.creditoFormGroup.get('cuotasCredito')?.value;
    this.total = this.creditoFormGroup.get('montoCredito')?.value + this.interes;
    let montoTotal = this.creditoFormGroup.get('montoCredito')?.value + this.interes;
    let fechaPago = new Date();
    //this.datePipe.transform(new Date(), "yyyy-MM-dd");

    for (let index = 0; index < this.creditoFormGroup.get('cuotasCredito')?.value; index++) {
      
      const cuotaN = new Cuota();
      cuotaN.numeroCuota = index + 1;
      cuotaN.capital = capital;
      cuotaN.interes = interesParcial;
      cuotaN.dividendo = cuotaN.capital + cuotaN.interes;
      montoTotal = montoTotal - cuotaN.dividendo;
      cuotaN.saldoCapital = montoTotal;

      if( this.creditoFormGroup.get('formaPago')?.value == 1){
        fechaPago = sumarDias(fechaPago, 1);
        cuotaN.fechaPago = this.datePipe.transform(fechaPago, "yyyy-MM-dd")!;
      }else if ( this.creditoFormGroup.get('formaPago')?.value == 2){
        fechaPago = sumarDias(fechaPago, 7);
        cuotaN.fechaPago = this.datePipe.transform(fechaPago, "yyyy-MM-dd")!;
      }else if ( this.creditoFormGroup.get('formaPago')?.value == 3){
        fechaPago = sumarDias(fechaPago, 14);
        cuotaN.fechaPago = this.datePipe.transform(fechaPago, "yyyy-MM-dd")!;
      }else if ( this.creditoFormGroup.get('formaPago')?.value == 4){
        fechaPago = sumarMeses(fechaPago, 1);
        cuotaN.fechaPago = this.datePipe.transform(fechaPago, "yyyy-MM-dd")!;
      }
      cuotaN.estado = 1;
      this.listaCuotas.push(cuotaN);
    }
    console.log(this.listaCuotas);
    this.stepper.next();
  }

  calcular() {
    this.stepper.next();
  }

  transformDate(dateString: string): string {
    let [day, month, year] = dateString.split('/');
    // Crear la fecha en UTC
    let date = new Date(Date.UTC(+year, +month - 1, +day));
    
    // Obtener la fecha en la zona horaria de Ecuador (UTC-5)
    date.setHours(date.getHours() - 5);

    // Formatear la fecha como yyyy-MM-dd
    let formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  }

}

function sumarDias(fecha: Date, dias: number): Date {
  const nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

function sumarMeses(fecha: Date, meses: number): Date {
  const nuevaFecha = new Date(fecha);
  const mesActual = nuevaFecha.getMonth();
  nuevaFecha.setMonth(mesActual + meses);
  return nuevaFecha;
}
