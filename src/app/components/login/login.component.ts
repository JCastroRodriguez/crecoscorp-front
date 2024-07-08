import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Alertas } from 'src/utilitarios/alertas';
import { ErrorFormulario } from 'src/utilitarios/error-formularios';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  errorFormulario = new ErrorFormulario();
  tituloSpinner = "Cargando ..."
  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();

  formLogin: FormGroup;
  datosUsuario: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private seguridadService: SeguridadService,
    private SpinnerService: NgxSpinnerService,
  ) {
    this.formLogin = this.fb.group({
      nombreUsuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('DATOS_USUARIO')) {
      //await this.SpinnerService.show();
      this.router.navigate(['dashboard/inicio']);
    }else{
      this.router.navigate(['/']);
    }
  }

  async Acceder() {
    this.datosUsuario = {};
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      this.alertas.ToastError('Por favor ingresar los datos obligatorios marcados en rojo.');
      return;
    }

    await this.SpinnerService.show();
    let json = {
      nombreUsuario: this.formLogin.get('nombreUsuario')?.value,
      clave: this.formLogin.get('clave')?.value
    }

    await this.usuarioService.ValidaConsultaUsuario(json.nombreUsuario, json.clave).toPromise().then(async (respuesta: any) => {

      if (respuesta.datos != null) {
        this.datosUsuario = respuesta.datos;
        //ALMACENANDO LOS DATOS DEL USUARIO y TOKEN
        this.seguridadService.setDatos(this.datosUsuario);
        console.log(this.datosUsuario);
        //this.servicioToken.setToken(respuesta.token);
        await this.router.navigate(['dashboard/inicio']);
      } else {
        this.alertas.ToastError('Credenciales inválidas');
      }
      await this.SpinnerService.hide();
    }).catch(async (error: Error) => {
      await this.SpinnerService.hide();
    }
    );
  }

}