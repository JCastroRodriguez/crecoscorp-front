import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  public datosUsuario: any;
    USUARIO_INFO = "DATOS_USUARIO"

    headers: HttpHeaders = new HttpHeaders;
    constructor(
        private httpCliente: HttpClient
    ) {
        this.CargarDatos();
    }

    CargarDatos() {
        if (localStorage.getItem(this.USUARIO_INFO)) {
            this.datosUsuario = JSON.parse(localStorage.getItem(this.USUARIO_INFO)!);
        }
    }

    setDatos(data: any) {
        localStorage.setItem(this.USUARIO_INFO, JSON.stringify(data));
    }

    removeDatos() {
        localStorage.removeItem(this.USUARIO_INFO);
    }
}
