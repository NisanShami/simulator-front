import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureLsportsBasedComponent } from './components/fixture-lsports-based/fixture-lsports-based.component';
import { FixtureTableComponent } from './components/fixture-table/fixture-table.component';

const routes: Routes = [
  { path: '', component: FixtureTableComponent },
  { path: '', redirectTo: '/fixtures', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
