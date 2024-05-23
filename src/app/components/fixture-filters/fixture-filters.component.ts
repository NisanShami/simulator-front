import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng-module/primeng/primeng.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import queryString from 'query-string';
import { FixtureService } from '../services/fixture.service';

@Component({
  selector: 'app-fixture-filters',
  standalone: true,
  imports: [PrimengModule, FormsModule, ReactiveFormsModule, FilterComponent],
  templateUrl: './fixture-filters.component.html',
  styleUrl: './fixture-filters.component.scss',
})
export class FixtureFiltersComponent implements OnInit {
  sports: any[] | undefined;
  selectedSports: string | undefined;
  entitesForm: FormGroup = this.fb.group({
    providerId: [null, Validators.required],
    sportId: [null], // add required validators
    locationId: [null],  // add required validators
    leagueId: [null],  // add required validators
  });

  constructor(
    private fb: FormBuilder,
    private fixtureService: FixtureService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.fixtureService.setFiltersQueryString(queryString.stringify(this.entitesForm.value, { skipNull: true }));
  }
}
