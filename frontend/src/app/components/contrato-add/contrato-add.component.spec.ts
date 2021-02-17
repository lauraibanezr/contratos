import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAddComponent } from './contrato-add.component';

describe('ContratoAddComponent', () => {
  let component: ContratoAddComponent;
  let fixture: ComponentFixture<ContratoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
