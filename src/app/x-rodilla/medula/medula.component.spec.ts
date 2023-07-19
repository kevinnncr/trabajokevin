import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedulaComponent } from './medula.component';

describe('MedulaComponent', () => {
  let component: MedulaComponent;
  let fixture: ComponentFixture<MedulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedulaComponent]
    });
    fixture = TestBed.createComponent(MedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
