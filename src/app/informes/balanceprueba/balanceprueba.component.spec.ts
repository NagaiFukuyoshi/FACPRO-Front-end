import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancepruebaComponent } from './balanceprueba.component';

describe('BalancepruebaComponent', () => {
  let component: BalancepruebaComponent;
  let fixture: ComponentFixture<BalancepruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancepruebaComponent]
    });
    fixture = TestBed.createComponent(BalancepruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
