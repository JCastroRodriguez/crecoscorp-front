import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO } from 'src/utilitarios/config';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  headers: HttpHeaders = new HttpHeaders;

    constructor(
        private httpCliente: HttpClient
    ) { }

  listarSubcatalogosByIdCatalogo(idCatalogo : number) {
    let url = `${URL_SERVICIO}/api/subcatalogo/catalogo/{idCatalogo}`;
    url = url.replace("{idCatalogo}", idCatalogo +"");
    return this.httpCliente.get(url, { headers: this.headers });
}
}
