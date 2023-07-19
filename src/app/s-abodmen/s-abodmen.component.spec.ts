import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAbodmenComponent } from './s-abodmen.component';

describe('SAbodmenComponent', () => {
  let component: SAbodmenComponent;
  let fixture: ComponentFixture<SAbodmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SAbodmenComponent]
    });
    fixture = TestBed.createComponent(SAbodmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
