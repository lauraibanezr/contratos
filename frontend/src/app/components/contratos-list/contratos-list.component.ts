import { Component, OnInit, PipeTransform } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { DecimalPipe } from '@angular/common';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/models/Contrato';

@Component({
  selector: 'app-contratos-list',
  templateUrl: './contratos-list.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {
  

  contratos: any = [];
  term: string = '';
  
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
  
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  constructor(private contratosService: ContratosService, private router:Router) {}

  ngOnInit(): void {
    this.getContratos();
  }

  getContratos() {
    this.contratosService.getContratos().subscribe(
      res => this.contratos = res, 
     err => console.error(err)
    )
  }

  editContrato(id:number) {
    console.log(id);
  }

  add() {
    this.router.navigate(['/con-add']);
  }

  deleteContrato(contrato: Contrato) {
    let id = contrato.id_contrato;
    console.log(id);
    this.contratosService.deleteContrato(id).subscribe(
      res => {
        //console.log(res);
        //this.getContratos();
        //this.contratos = this.contratos.filter(c => c !== contrato);
        this.getContratos();
      
      },
      err => console.log(err)
   )
  }

  
}

