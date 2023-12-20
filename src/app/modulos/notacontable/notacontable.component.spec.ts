import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotacontableComponent } from './notacontable.component';

describe('NotacontableComponent', () => {
  let component: NotacontableComponent;
  let fixture: ComponentFixture<NotacontableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotacontableComponent]
    });
    fixture = TestBed.createComponent(NotacontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
