import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
  providedIn: 'root'
})
export class ParametricaService {

  headers: HttpHeaders = new HttpHeaders;

  constructor(
      private httpCliente: HttpClient
  ){}

  ConsultarMenu(idUsuario : number, idPerfil : number) {
      let url = `${URL_SERVICIO}/api/menu-perfil?idUsuario=${idUsuario}&idPerfil=${idPerfil}`;
      return this.httpCliente.get(url, { headers: this.headers });
  }
}
