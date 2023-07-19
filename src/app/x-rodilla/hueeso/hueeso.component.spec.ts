import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueesoComponent } from './hueeso.component';

describe('HueesoComponent', () => {
  let component: HueesoComponent;
  let fixture: ComponentFixture<HueesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HueesoComponent]
    });
    fixture = TestBed.createComponent(HueesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
