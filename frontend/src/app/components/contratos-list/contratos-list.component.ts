import { Component, OnInit, Inject  } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
//import { FormControl } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { DecimalPipe } from '@angular/common';
//import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/models/Contrato';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';
//import {MD_DIALOG_DATA} from '@angular/material';

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

  constructor(private contratosService: ContratosService, private router:Router, public dialog: MatDialog) {}

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
        //this.getContratos();
        this.contratosService.getContratos();
      },
      err => console.log(err)
   )
  }
/*
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
*/
  
  openView(contrato: any) {
    //this.dialog.open(ViewContratos);
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: contrato.numero_contrato,
      title: contrato.partei,
      sutitle: contrato.parteii,
      fecha: contrato.fecha_suscripcion,
      pago: contrato.termino_pago,
      aceptar: contrato.termino_aceptar,
      vigencia: contrato.termino_vigencia,
      reclamacion: contrato.termino_reclamacion,
      // termino_contestar : number,
      fin: contrato.fecha_culminacion,
    };
    //console.log(contrato.numero_contrato);
    this.dialog.open(ViewContratos, dialogConfig);
    const dialogRef = this.dialog.open(ViewContratos, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
    /*const dialogRef = this.dialog.open(ViewContratos, {
      //width: '250px',
     
      data: {name: contrato.numero_contrato, par1: contrato.parte1}
    });*/
  }
  
 
}

@Component({
  selector: 'contrato-view',
  templateUrl: 'contrato-view.html',
  styles: [`
  .borderless td, .borderless th {
    border: none;
}
  `]
})
export class ViewContratos {

 
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialog) { }
    ngOnInit() {
      // will log the entire data object
      console.log(this.data)
    }
    cancelar() {
      this.dialogRef.closeAll();
    }

}

