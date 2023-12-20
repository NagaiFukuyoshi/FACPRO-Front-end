import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboscajaComponent } from './reciboscaja.component';

describe('ReciboscajaComponent', () => {
  let component: ReciboscajaComponent;
  let fixture: ComponentFixture<ReciboscajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciboscajaComponent]
    });
    fixture = TestBed.createComponent(ReciboscajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
