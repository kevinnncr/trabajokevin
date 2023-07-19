import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBrazoComponent } from './q-brazo.component';

describe('QBrazoComponent', () => {
  let component: QBrazoComponent;
  let fixture: ComponentFixture<QBrazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QBrazoComponent]
    });
    fixture = TestBed.createComponent(QBrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
