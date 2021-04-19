import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
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

  nameForm = new FormControl('', [
    Validators.required,
  ]);

  clienteForm = new FormControl('',
    Validators.required,
  );

  natForm = new FormControl('', [
    Validators.required,
  ]);

  proForm = new FormControl('', [
    Validators.required,
  ]);


  date = new FormControl(moment(),Validators.required);

  dateFin = new FormControl('');

  pagoForm = new FormControl('');
  vigenciaForm = new FormControl('');
  reclamarForm = new FormControl('');
  contestarForm = new FormControl('');



  constructor() { }

  ngOnInit(): void {
  }

}
