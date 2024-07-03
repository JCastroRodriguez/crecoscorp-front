import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  headers: HttpHeaders = new HttpHeaders;

  constructor(
    private httpCliente: HttpClient
  ) { }

  perfilesTodos() {
    let url = `${URL_SERVICIO}/api/perfil/all`;
    return this.httpCliente.get(url, { headers: this.headers });
  }

  crearPerfil(json: any) {
    let url = `${URL_SERVICIO}/api/perfil/crear-perfil`;
    return this.httpCliente.post(url, json, { headers: this.headers });
  }

  actualizarPerfil(idPerfil: String, json: any) {
    let url = `${URL_SERVICIO}/api/perfil/actualizar-perfil?idPerfil=${idPerfil}`;
    return this.httpCliente.put(url, json, { headers: this.headers });
  }
}
