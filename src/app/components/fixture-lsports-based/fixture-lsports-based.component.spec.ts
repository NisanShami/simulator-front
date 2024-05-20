import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureLsportsBasedComponent } from './fixture-lsports-based.component';

describe('FixtureLsportsBasedComponent', () => {
  let component: FixtureLsportsBasedComponent;
  let fixture: ComponentFixture<FixtureLsportsBasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixtureLsportsBasedComponent]
    });
    fixture = TestBed.createComponent(FixtureLsportsBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
