import { Component, OnInit, PipeTransform } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { DecimalPipe } from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contratos-list',
  templateUrl: './contratos-list.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {
  

  contratos: any = [];
  term: string = '';
  
  page_size: number = 10
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
  
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  constructor(private contratosService: ContratosService) {}

  ngOnInit(): void {
    this.contratosService.getContratos().subscribe(
      res => this.contratos = res, 
     err => console.error(err)
    )
    //this.contratos = this.contratosService.getContratos();
   // console.log(this.contratos);
  }
  prueba() {
    var fila = this.contratos.length;
   // var nFilas = $("#mi-tabla tr").length;
    alert(fila);
  }

  editContrato() {
    console.log('Perfect')
  }

}

