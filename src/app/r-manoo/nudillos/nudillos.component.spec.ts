import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudillosComponent } from './nudillos.component';

describe('NudillosComponent', () => {
  let component: NudillosComponent;
  let fixture: ComponentFixture<NudillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NudillosComponent]
    });
    fixture = TestBed.createComponent(NudillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
