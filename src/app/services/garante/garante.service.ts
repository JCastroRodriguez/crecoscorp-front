import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
  providedIn: 'root'
})
export class GaranteService {

  headers: HttpHeaders = new HttpHeaders;

  constructor(
    private httpCliente: HttpClient
  ) { }

  garanteByIdentificacion(identificacion: number) {
    let url = `${URL_SERVICIO}/api/garante/cedula/{identificacion}`;
    url = url.replace("{identificacion}", identificacion + "");
    return this.httpCliente.get(url, { headers: this.headers });
  }

  garanteByCelular(celular: String) {
    let url = `${URL_SERVICIO}/api/garante/celular/{celular}`;
    url = url.replace("{celular}", celular + "");
    return this.httpCliente.get(url, { headers: this.headers });
  }
}
