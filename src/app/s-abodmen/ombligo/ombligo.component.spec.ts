import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbligoComponent } from './ombligo.component';

describe('OmbligoComponent', () => {
  let component: OmbligoComponent;
  let fixture: ComponentFixture<OmbligoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmbligoComponent]
    });
    fixture = TestBed.createComponent(OmbligoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
