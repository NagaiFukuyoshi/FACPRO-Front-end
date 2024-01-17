import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartercerosComponent } from './editarterceros.component';

describe('EditartercerosComponent', () => {
  let component: EditartercerosComponent;
  let fixture: ComponentFixture<EditartercerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditartercerosComponent]
    });
    fixture = TestBed.createComponent(EditartercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
