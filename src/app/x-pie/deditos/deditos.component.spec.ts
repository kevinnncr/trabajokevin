import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeditosComponent } from './deditos.component';

describe('DeditosComponent', () => {
  let component: DeditosComponent;
  let fixture: ComponentFixture<DeditosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeditosComponent]
    });
    fixture = TestBed.createComponent(DeditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
