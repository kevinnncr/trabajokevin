import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombrosComponent } from './hombros.component';

describe('HombrosComponent', () => {
  let component: HombrosComponent;
  let fixture: ComponentFixture<HombrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HombrosComponent]
    });
    fixture = TestBed.createComponent(HombrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
