import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoresultadosComponent } from './estadoresultados.component';

describe('EstadoresultadosComponent', () => {
  let component: EstadoresultadosComponent;
  let fixture: ComponentFixture<EstadoresultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoresultadosComponent]
    });
    fixture = TestBed.createComponent(EstadoresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
