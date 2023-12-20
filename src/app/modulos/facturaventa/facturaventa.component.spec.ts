import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaventaComponent } from './facturaventa.component';

describe('FacturaventaComponent', () => {
  let component: FacturaventaComponent;
  let fixture: ComponentFixture<FacturaventaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaventaComponent]
    });
    fixture = TestBed.createComponent(FacturaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
