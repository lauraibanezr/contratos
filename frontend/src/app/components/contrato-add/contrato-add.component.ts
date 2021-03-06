import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { ContratosService } from '../../services/contratos.service';
import { Contrato } from '../../models/Contrato';
import { ActivatedRoute, Router } from '@angular/router';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-contrato-add',
  templateUrl: './contrato-add.component.html',
  styleUrls: ['./contrato-add.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ContratoAddComponent implements OnInit {

  forma: FormGroup;
  contrato: Contrato;
  edit: boolean = false;

  constructor(private contratoService: ContratosService, private fb:FormBuilder, private router:Router, private activeRoute: ActivatedRoute) {this.crearFormulario() }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
 //   console.log(params);
    if (params.id_contrato) {
      this.contratoService.getContrato(params.id_contrato)
        .subscribe(
          res => {
            this.contrato = res;
            this.edit = true;
            console.log(this.contrato);
            this.forma.controls['nameForm'].setValue(res.numero_contrato);
            this.forma.controls['clienteForm'].setValue(res.partei);
            this.forma.controls['natForm'].setValue(res.caracteristica);
            this.forma.controls['proForm'].setValue(res.parteii);
            this.forma.controls['date'].setValue(res.fecha_suscripcion);
            this.forma.controls['dateFin'].setValue(res.fecha_culminacion);
            this.forma.controls['pagoForm'].setValue(res.termino_pago);
            this.forma.controls['vigenciaForm'].setValue(res.termino_vigencia);
            this.forma.controls['reclamarForm'].setValue(res.termino_reclamacion);
            this.forma.controls['contestarForm'].setValue(res.termino_contestar);
          },
          err => console.log(err)
        )
    }
  
  }
  
  crearFormulario() {
    this.forma = this.fb.group({
      nameForm: new FormControl('', Validators.required),
      clienteForm: new FormControl('', [Validators.required]),
      natForm: new FormControl('', [ Validators.required]),
      proForm: new FormControl('', [Validators.required]),
      date: new FormControl(moment(),Validators.required),
      dateFin: new FormControl(''),   
      pagoForm: new FormControl(''),
      vigenciaForm: new FormControl(''),
      reclamarForm: new FormControl(''),
      contestarForm: new FormControl(''),
    
    })
  }

  list() {
    this.router.navigate(['/con-list']);
  }

  guardar() {
    console.log(this.edit);

    if (this.edit == true) {
      console.log('hay que editar');
      this.contrato.caracteristica = this.forma.value.natForm;
      this.contrato.numero_contrato = this.forma.value.nameForm;
      this.contrato.partei = this.forma.value.clienteForm;
      this.contrato.parteii = this.forma.value.proForm;

      this.contrato.fecha_suscripcion = this.forma.value.date;
      this.contrato.fecha_culminacion = this.forma.value.dateFin;
      this.contrato.termino_pago = this.forma.value.pagoForm;
      this.contrato.termino_vigencia = this.forma.value.vigenciaForm;
      this.contrato.termino_reclamacion = this.forma.value.reclamarForm;
      this.contrato.termino_contestar = this.forma.value.contestarForm;

      console.log(this.contrato);
     
      this.contratoService.updateContrato(this.contrato).subscribe(
        res => {
        /*  console.log('holis');*/
          console.log(res);
        },
          err => console.error(err)
      );

      this.router.navigate(['/con-list']);
      this.contratoService.getContratos();
      // window.location.reload();
    } else {
      console.log('salvarlo')
      console.log(this.contrato);
      //this.contrato = this.forma.value;
      console.log(this.forma.value);
      console.log(this.contrato);
      
      this.contrato = renameKey(this.contrato, 'nameForm', 'numero_contrato');
      this.contrato = renameKey(this.contrato, 'clienteForm', 'partei');
      this.contrato = renameKey(this.contrato, 'natForm', 'caracteristica');
      this.contrato = renameKey(this.contrato, 'proForm', 'parteii');
      this.contrato = renameKey(this.contrato, 'date', 'fecha_suscripcion');
      this.contrato = renameKey(this.contrato, 'dateFin', 'fecha_culminacion');
      this.contrato = renameKey(this.contrato, 'pagoForm', 'termino_pago');
      this.contrato = renameKey(this.contrato, 'vigenciaForm', 'termino_vigencia');
      this.contrato = renameKey(this.contrato, 'reclamarForm', 'termino_reclamacion');
      this.contrato = renameKey(this.contrato, 'contestarForm', 'termino_contestar');
         
      console.log(this.contrato);
      console.log(this.forma.value.natForm);
     
 
      //console.log(this.contrato);
      if (this.forma.value.clienteForm != '' && this.forma.value.proForm != '' && this.forma.value.nameForm != '' && this.forma.value.natForm != '') {
        console.log('salvando');


        //salvarrrr
        this.contratoService.saveContrato(this.contrato).subscribe(
          res => {
            //console.log(res);
            window.location.reload();
          },
            err => console.error(err)
        );
        this.router.navigate(['/con-list']);
      } else {
        console.log('no se salvo')
      }
    }

    /*
   

*/
   /* this.contratoService.saveContrato(this.contrato).subscribe(
      res => {
        console.log(res);
      },
        err => console.error(err)
    );*/
  }


  

}

const renameKey = (object, key, newKey) => {
  const clonedObj = clone(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};
const clone = (obj) => Object.assign({}, obj);

