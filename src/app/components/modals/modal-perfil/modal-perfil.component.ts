import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CatalogoService } from 'src/app/services/catalogo/catalogo.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { Alertas } from 'src/utilitarios/alertas';
import { ErrorFormulario } from 'src/utilitarios/error-formularios';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css'],
  providers: [DatePipe]
})
export class ModalPerfilComponent implements OnInit {

  //DATOS DEL USUARIO
  usuario = this.seguridadService.datosUsuario.id;

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  errorFormulario = new ErrorFormulario();
  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();

  formModal: FormGroup;
  estado : any = [];

  constructor(
    private seguridadService: SeguridadService,
    private perfilService: PerfilService,
    private catalogoService: CatalogoService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalPerfilComponent>,
    private SpinnerService: NgxSpinnerService,
  ) {
    dialogRef.disableClose = true;

    this.formModal = this.fb.group({
      nombrePerfil: new FormControl('', [Validators.required]),
      descripcionPerfil: new FormControl('', [Validators.required]),
      estado: new FormControl(''),
    });
  }

  async ngOnInit(): Promise<void> {
    console.log(this.data.datos)
    this.estado = [];
    await this.SpinnerService.show();
    await this.catalogoService.listarSubcatalogosByIdCatalogo(1).toPromise().then(async (respuesta: any) => {
      if (respuesta.datos != null) {
        this.estado = respuesta.datos;
        console.log(this.estado)
      } else {
        this.alertas.ToastExito('No se encontraron registros');
      }
      await this.SpinnerService.hide();
    }).catch(async (error: Error) => {
      await this.SpinnerService.hide();
    }
    );

    this.formModal.reset();
    if (this.data.id > 0) {
      this.formModal.get('nombrePerfil')?.setValue(this.data.datos.nombrePerfil);
      this.formModal.get('descripcionPerfil')?.setValue(this.data.datos.descripcionPerfil);
      this.formModal.get('estado')?.setValue(this.data.datos.estado);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
    this.formModal.reset();
  }

  async guardar() {
    if (this.formModal.invalid) {
      this.formModal.markAllAsTouched();
      this.alertas.ToastError('Por favor ingresar los datos obligatorios marcados en rojo.');
      return;
    }
    await this.SpinnerService.show();
    let json = {};
    if (this.data.id === 0) {
      json = {
        nombrePerfil: this.formModal.get('nombrePerfil')?.value,
        descripcionPerfil: this.formModal.get('descripcionPerfil')?.value,
        estado: 32,
        status: 3,
        codigoUsuario: this.usuario,
        fecha: this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss")
      }

      await this.perfilService.crearPerfil(json).toPromise().then(async (respuesta: any) => {
        if (respuesta.datos != null) {
          this.dialogRef.close("creado");
          this.formModal.reset();
        }
        await this.SpinnerService.hide();
      }).catch(async (error: Error) => {
        await this.SpinnerService.hide();
      })

    } else {
      json = {
        id: this.data.id,
        nombrePerfil: this.formModal.get('nombrePerfil')?.value,
        descripcionPerfil: this.formModal.get('descripcionPerfil')?.value,
        estado: this.formModal.get('estado')?.value,
        fecha: this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss"),
        codigoUsuario: this.usuario
      }

      await this.perfilService.actualizarPerfil(this.data.id, json).toPromise().then(async (respuesta: any) => {
        if (respuesta.datos != null) {
          this.dialogRef.close("actualizado");
          this.formModal.reset();
        }
        //await this.SpinnerService.hide();
      }).catch(async (error: Error) => {
        //await this.SpinnerService.hide();
      })
    }
  }

}
