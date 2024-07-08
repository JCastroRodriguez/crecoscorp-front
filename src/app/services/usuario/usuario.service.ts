import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    headers: HttpHeaders = new HttpHeaders;

    constructor(
        private httpCliente: HttpClient
    ) { }

    ValidaConsultaUsuario(nombreUsuario: String, clave: String) {
        let url = `${URL_SERVICIO}/api/usuario/login?nombreUsuario=${nombreUsuario}&clave=${clave}`;
        return this.httpCliente.get(url, { headers: this.headers });
    }

    usuariosTodos() {
        let url = `${URL_SERVICIO}/api/usuario/all`;
        return this.httpCliente.get(url, { headers: this.headers });
    }

    usuarioById(id : number) {
        let url = `${URL_SERVICIO}/api/usuario/{id}`;
        url = url.replace("{id}", id +"");
        return this.httpCliente.get(url, { headers: this.headers });
    }

}
