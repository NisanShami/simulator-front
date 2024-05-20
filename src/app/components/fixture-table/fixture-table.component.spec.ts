import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureTableComponent } from './fixture-table.component';

describe('FixtureTableComponent', () => {
  let component: FixtureTableComponent;
  let fixture: ComponentFixture<FixtureTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixtureTableComponent]
    });
    fixture = TestBed.createComponent(FixtureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
