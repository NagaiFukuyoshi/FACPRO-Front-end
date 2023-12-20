import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesegresoComponent } from './comprobantesegreso.component';

describe('ComprobantesegresoComponent', () => {
  let component: ComprobantesegresoComponent;
  let fixture: ComponentFixture<ComprobantesegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprobantesegresoComponent]
    });
    fixture = TestBed.createComponent(ComprobantesegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
