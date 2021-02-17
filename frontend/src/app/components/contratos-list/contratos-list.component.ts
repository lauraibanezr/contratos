import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../../services/contratos.service';

@Component({
  selector: 'app-contratos-list',
  templateUrl: './contratos-list.component.html',
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {

  contratos: any = [];

  constructor(private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.contratosService.getContratos().subscribe(
      res => this.contratos = res,
      err => console.error(err)
    )
  }

}
