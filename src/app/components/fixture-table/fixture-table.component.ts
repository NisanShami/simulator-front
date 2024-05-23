import { AfterViewInit, Component } from '@angular/core';
import { PrimengModule } from '../../primeng-module/primeng/primeng.module';
import { FixtureService } from '../services/fixture.service';
import { Photo } from '../models/fixture.model';
import { FixtureFiltersComponent } from '../fixture-filters/fixture-filters.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-fixture-table',
  templateUrl: './fixture-table.component.html',
  styleUrls: ['./fixture-table.component.scss'],
  standalone: true,
  imports: [PrimengModule, FixtureFiltersComponent],
})
export class FixtureTableComponent implements AfterViewInit {

  headerColsNames!: string[];
  headerCols!: string[];
  selectedPhotos!: any;

  data!: any[];

  constructor(private fixtureService: FixtureService) {}

  makeHeaderCols(singleResult: Photo) {
    this.headerCols = Object.keys(singleResult);
    this.headerColsNames = Object.keys(singleResult).map(
      (header) => header.charAt(0).toUpperCase() + header.slice(1)
    );
  }

  ngAfterViewInit(): void {
    this.fixtureService.filtersAsQueryString$
      .pipe(
        switchMap((r) => {
          console.log(r);
          return this.fixtureService.getAllData('fixtures', r);
        })
      )
      .subscribe((res) => {
        this.makeHeaderCols(res[0]);
        this.data = res;
      });
  }
}
