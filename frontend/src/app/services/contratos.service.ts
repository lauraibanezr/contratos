import { Injectable } from '@angular/core';

//peticiones http
import { HttpClient } from '@angular/common/http';

import { PipeTransform } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

//model
import { Contrato } from '../models/Contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getContratos() { return this.http.get('http://localhost:3000/contratos') }
 
  getContrato(id_contrato: number) { return this.http.get('${this.API_URI}/contratos/${id_contrato}') }

  saveContrato(contrato: Contrato) {
    return this.http.post('${this.API_URI}/contratos', contrato);
  }

  deleteContrato(id_contrato: number) {
    return this.http.delete('${this.API_URI}/contratos/${id_contrato}');
  }

  updateContrato(id_contrato: number, contrato: Contrato) {
    return this.http.put('${this.API_URI}/contratos/${id_contrato}', contrato);
  }

}

