import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancegeneralComponent } from './balancegeneral.component';

describe('BalancegeneralComponent', () => {
  let component: BalancegeneralComponent;
  let fixture: ComponentFixture<BalancegeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancegeneralComponent]
    });
    fixture = TestBed.createComponent(BalancegeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
