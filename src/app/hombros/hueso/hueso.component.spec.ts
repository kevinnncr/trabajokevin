import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuesoComponent } from './hueso.component';

describe('HuesoComponent', () => {
  let component: HuesoComponent;
  let fixture: ComponentFixture<HuesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuesoComponent]
    });
    fixture = TestBed.createComponent(HuesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
