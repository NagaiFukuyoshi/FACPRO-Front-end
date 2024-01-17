import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroauxiliarcuentaComponent } from './libroauxiliarcuenta.component';

describe('LibroauxiliarcuentaComponent', () => {
  let component: LibroauxiliarcuentaComponent;
  let fixture: ComponentFixture<LibroauxiliarcuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroauxiliarcuentaComponent]
    });
    fixture = TestBed.createComponent(LibroauxiliarcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
