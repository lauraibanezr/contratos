import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { ContratosService } from '../../services/contratos.service';
import { Contrato } from '../../models/Contrato';

// import { default as _rollupMoment } from 'moment';


// const moment = _rollupMoment || _moment;

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

  constructor(private contratoService: ContratosService, private fb:FormBuilder) {this.crearFormulario() }

  ngOnInit(): void { }
  
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

  guardar() {
    this.contrato = this.forma.value;
    //console.log(this.forma.value);
    //console.log(this.contrato);
    this.contrato = renameKey(this.contrato, 'nameForm', 'numero_contrato');
    this.contrato = renameKey(this.contrato, 'clienteForm', 'partei');
    this.contrato = renameKey(this.contrato, 'natForm', 'naturaleza_del_contrato');
    this.contrato = renameKey(this.contrato, 'proForm', 'parteii');
    this.contrato = renameKey(this.contrato, 'date', 'fecha_suscripcion');
    this.contrato = renameKey(this.contrato, 'dateFin', 'fecha_culminacion');
    this.contrato = renameKey(this.contrato, 'pagoForm', 'termino_pago');
    this.contrato = renameKey(this.contrato, 'vigenciaForm', 'termino_vigencia');
    this.contrato = renameKey(this.contrato, 'reclamarForm', 'termino_reclamacion');
    this.contrato = renameKey(this.contrato, 'contestarForm', 'termino_contestar');
        
    //console.log(this.contrato);
    if (this.contrato.partei != '' || this.contrato.parteii != ''|| this.contrato.numero_contrato  != ''|| this.contrato.naturaleza_del_contrato != '') {
      console.log('salvar');
    }
    console.log('no se salvo')
    


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