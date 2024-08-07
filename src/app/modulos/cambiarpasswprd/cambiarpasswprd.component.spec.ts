import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarpasswprdComponent } from './cambiarpasswprd.component';

describe('CambiarpasswprdComponent', () => {
  let component: CambiarpasswprdComponent;
  let fixture: ComponentFixture<CambiarpasswprdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarpasswprdComponent]
    });
    fixture = TestBed.createComponent(CambiarpasswprdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
