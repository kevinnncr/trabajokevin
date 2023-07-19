import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PezonComponent } from './pezon.component';

describe('PezonComponent', () => {
  let component: PezonComponent;
  let fixture: ComponentFixture<PezonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PezonComponent]
    });
    fixture = TestBed.createComponent(PezonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
