import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RManooComponent } from './r-manoo.component';

describe('RManooComponent', () => {
  let component: RManooComponent;
  let fixture: ComponentFixture<RManooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RManooComponent]
    });
    fixture = TestBed.createComponent(RManooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
