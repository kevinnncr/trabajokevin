import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XRodillaComponent } from './x-rodilla.component';

describe('XRodillaComponent', () => {
  let component: XRodillaComponent;
  let fixture: ComponentFixture<XRodillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XRodillaComponent]
    });
    fixture = TestBed.createComponent(XRodillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
