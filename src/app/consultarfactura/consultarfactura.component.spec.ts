import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarfacturaComponent } from './consultarfactura.component';

describe('ConsultarfacturaComponent', () => {
  let component: ConsultarfacturaComponent;
  let fixture: ComponentFixture<ConsultarfacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarfacturaComponent]
    });
    fixture = TestBed.createComponent(ConsultarfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
