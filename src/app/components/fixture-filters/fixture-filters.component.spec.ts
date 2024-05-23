import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureFiltersComponent } from './fixture-filters.component';

describe('FixtureFiltersComponent', () => {
  let component: FixtureFiltersComponent;
  let fixture: ComponentFixture<FixtureFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixtureFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
