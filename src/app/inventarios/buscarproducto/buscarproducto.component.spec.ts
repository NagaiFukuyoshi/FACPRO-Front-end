import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarproductoComponent } from './buscarproducto.component';

describe('BuscarproductoComponent', () => {
  let component: BuscarproductoComponent;
  let fixture: ComponentFixture<BuscarproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarproductoComponent]
    });
    fixture = TestBed.createComponent(BuscarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
