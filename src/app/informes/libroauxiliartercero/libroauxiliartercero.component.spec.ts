import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroauxiliarterceroComponent } from './libroauxiliartercero.component';

describe('LibroauxiliarterceroComponent', () => {
  let component: LibroauxiliarterceroComponent;
  let fixture: ComponentFixture<LibroauxiliarterceroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroauxiliarterceroComponent]
    });
    fixture = TestBed.createComponent(LibroauxiliarterceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
