import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { JwtRequestService } from '../jwt-request.service';
import { Inventario } from './inventario';

@Injectable()
export class InventarioService {

  static readonly URL: string = "inventario";

  constructor(private http: Http,   private jwtRequest:JwtRequestService) { }

  lista(pagina:number = 1, resultados_por_pagina:number =20): Observable<Inventario>{
		return this.jwtRequest.get(InventarioService.URL,null,{page: pagina, per_page: resultados_por_pagina}).map( (response: Response) => response.json().data);
  }
}
