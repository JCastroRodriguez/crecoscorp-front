import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Alertas } from 'src/utilitarios/alertas';
export let browserRefresh = false;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  subscription: Subscription;
  datosUsuario: any = {};
  usuarioLogeado: any = {};
  tituloSpinner = "Cargando ..."
  // / DEFINIR INSTANCIA DE LA CLASE ERRORFORMULARIO.
  alertas = new Alertas();

  constructor(
    private rutas: Router,
    private seguridadService: SeguridadService,
    private usuarioService: UsuarioService,
    private SpinnerService: NgxSpinnerService,
  ) {
    this.subscription = rutas.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !rutas.navigated;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    await this.SpinnerService.show();
    if (localStorage.getItem('DATOS_USUARIO')) {
      this.datosUsuario = JSON.parse(localStorage.getItem('DATOS_USUARIO')!);
      this.seguridadService.CargarDatos();

      await this.usuarioService.usuarioById(this.datosUsuario.id).toPromise().then(async (respuesta: any) => {
        if (respuesta.datos != null) {
          this.usuarioLogeado = respuesta.datos;
          console.log(this.usuarioLogeado);
        } else {
          this.alertas.ToastError('Usuario no existe');
          await this.rutas.navigate(['/']);
        }
        await this.SpinnerService.hide();
      }).catch(async (error: Error) => {
        await this.SpinnerService.hide();
      });

    } else {
      this.cerrarSesion()
      await this.SpinnerService.hide();
    }
  }

  salir() {
    Swal.fire({
      title: '¿Desea salir del sistema?',
      text: 'Click en "Aceptar", si usted desea cerrar la sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#17a2b8',
      customClass: {
        cancelButton: "btn-sm",
        confirmButton: "btn-sm"
      },
    }).then((result) => {
      if (result.value) {
        this.cerrarSesion()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return;
      }
    })
  }

  cerrarSesion() {
    this.seguridadService.removeDatos();
    this.rutas.navigate(['/']);
  }

}