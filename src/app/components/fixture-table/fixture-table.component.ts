import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { Table } from 'primeng/table';
import { PrimengModule } from 'src/app/primeng-module/primeng/primeng.module';
import { FixtureService } from '../services/fixture.service';
import { Photo } from '../models/fixture.model';

@Component({
  selector: 'app-fixture-table',
  templateUrl: './fixture-table.component.html',
  styleUrls: ['./fixture-table.component.scss'],
  standalone: true,
  imports: [PrimengModule],
})
export class FixtureTableComponent implements AfterViewInit {
  // @ViewChild(Table) tableRef!: Table;

  headerColsNames!: string[];
  headerCols!: string[];
  selectedPhotos!: any;

  photos!: any[];

  constructor(private fixtureService: FixtureService) {}

  makeHeaderCols(singleResult: Photo) {
    this.headerCols = Object.keys(singleResult);
    this.headerColsNames = Object.keys(singleResult).map(
      (header) => header.charAt(0).toUpperCase() + header.slice(1)
    );
  }

  ngAfterViewInit(): void {
    this.fixtureService.getData().subscribe((res) => {
      this.makeHeaderCols(res[0]);
      this.photos = res;
    });

    setTimeout(() => {
      console.log(this.selectedPhotos)
    }, 5000);
  }
}
