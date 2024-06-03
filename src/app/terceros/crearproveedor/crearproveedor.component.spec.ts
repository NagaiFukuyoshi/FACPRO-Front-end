import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproveedorComponent } from './crearproveedor.component';

describe('CrearproveedorComponent', () => {
  let component: CrearproveedorComponent;
  let fixture: ComponentFixture<CrearproveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearproveedorComponent]
    });
    fixture = TestBed.createComponent(CrearproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
