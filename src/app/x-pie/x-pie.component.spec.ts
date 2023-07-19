import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPIEComponent } from './x-pie.component';

describe('XPIEComponent', () => {
  let component: XPIEComponent;
  let fixture: ComponentFixture<XPIEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XPIEComponent]
    });
    fixture = TestBed.createComponent(XPIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
