import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustecontableComponent } from './ajustecontable.component';

describe('AjustecontableComponent', () => {
  let component: AjustecontableComponent;
  let fixture: ComponentFixture<AjustecontableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjustecontableComponent]
    });
    fixture = TestBed.createComponent(AjustecontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
