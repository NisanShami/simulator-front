import { Component } from '@angular/core';
import { MenuItem } from '@lsports/ui/lib/side-menu/menu-data/menu-data-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simulator-front';

  user?: any;
  isSideMenuOpen: boolean = false;
  menuItems: MenuItem[] = [{name: 'Trading floor', icon: 'trending_up', routeUrl: '/', subItems: [{name: 'Inplay', routeUrl: '/'}, {name: 'Prematch', routeUrl: 'pages/trading-floor/pre-match'}]}, {name: 'Fixture ordering', icon: 'credit_card', routeUrl: 'fixture-ordering', subItems: [{name: 'Inplay', routeUrl: 'pages/fixture-ordering/pre-match', disabled: true}, {name: 'Prematch', routeUrl: 'pages/fixture-ordering/in-play'}]}, {name: 'Fixture logs', icon: 'topic', routeUrl: 'fixture-logs', subItems: [{name: 'Inplay', routeUrl: 'pages/fixture-logs/in-play'}, {name: 'Prematch', routeUrl: 'pages/fixture-logs/pre-match'}, {name: 'PastFixtures', routeUrl: 'pages/fixture-logs/past-fixtures'}]}, {name: 'Fixture reports', icon: 'bar_chart', disabled: true, routeUrl: 'pages/reports'}, {name: 'Configurations', icon: 'settings', routeUrl: 'configuration', subItems: [{name: 'Inplay', routeUrl: 'pages/configuration/in-play/provider-list'}, {name: 'Prematch', routeUrl: 'pages/configuration/pre-match/provider-list'}]}];

  onSideMenuChanged(isSideMenuOpen: boolean) {
    this.isSideMenuOpen = isSideMenuOpen;
  }
}
