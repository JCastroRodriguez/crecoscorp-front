import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  headers: HttpHeaders = new HttpHeaders;

  constructor(
    private httpCliente: HttpClient
  ) { }

  solicitanteByIdentificacion(identificacion: number) {
    let url = `${URL_SERVICIO}/api/persona/solicitante/cedula/{identificacion}`;
    url = url.replace("{identificacion}", identificacion + "");
    return this.httpCliente.get(url, { headers: this.headers });
  }

  solicitanteByCelular(celular: String) {
    let url = `${URL_SERVICIO}/api/persona/solicitante/celular/{celular}`;
    url = url.replace("{celular}", celular + "");
    return this.httpCliente.get(url, { headers: this.headers });
  }

  solicitanteByEmail(email: String) {
    let url = `${URL_SERVICIO}/api/persona/solicitante/email/{email}`;
    url = url.replace("{email}", email + "");
    return this.httpCliente.get(url, { headers: this.headers });
  }
}
