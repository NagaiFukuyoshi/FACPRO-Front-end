import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldosinicialesComponent } from './saldosiniciales.component';

describe('SaldosinicialesComponent', () => {
  let component: SaldosinicialesComponent;
  let fixture: ComponentFixture<SaldosinicialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaldosinicialesComponent]
    });
    fixture = TestBed.createComponent(SaldosinicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
