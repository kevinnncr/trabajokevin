import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntestinoComponent } from './intestino.component';

describe('IntestinoComponent', () => {
  let component: IntestinoComponent;
  let fixture: ComponentFixture<IntestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntestinoComponent]
    });
    fixture = TestBed.createComponent(IntestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
