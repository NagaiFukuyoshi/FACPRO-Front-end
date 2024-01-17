import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminartercerosComponent } from './eliminarterceros.component';

describe('EliminartercerosComponent', () => {
  let component: EliminartercerosComponent;
  let fixture: ComponentFixture<EliminartercerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminartercerosComponent]
    });
    fixture = TestBed.createComponent(EliminartercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
