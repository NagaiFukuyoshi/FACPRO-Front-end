import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartercerosComponent } from './crearterceros.component';

describe('CreartercerosComponent', () => {
  let component: CreartercerosComponent;
  let fixture: ComponentFixture<CreartercerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreartercerosComponent]
    });
    fixture = TestBed.createComponent(CreartercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
