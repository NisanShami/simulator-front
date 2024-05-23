import { Component } from '@angular/core';
import {
  AdvancedTableTemplateEnum,
  IAdvancedTableColumnsModel,
  IAdvancedTableRowHoverBtn,
} from '@lsports/ui';

@Component({
  selector: 'app-fixture-lsports-based',
  templateUrl: './fixture-lsports-based.component.html',
  styleUrls: ['./fixture-lsports-based.component.scss'],
})
export class FixtureLsportsBasedComponent {
  destinationPage = 1;
  showPaginator = true;
  refreshButtonIcon = '../../../assets/images/refresh.svg';
  refreshButtonLabel = 'Refresh';
  showRefreshButton = true;
  emptyImagePath = '../../../assets/images/empty_message.svg';
  emptyMessageSubText = '';
  emptyMessageText = 'No data to display';
  allowEmptyMessage = false;
  tableContainerHeightOffset = '80px';
  totalItems = 0;
  entities = [];
  searchText = '';

  hoverButtons: IAdvancedTableRowHoverBtn[] = [];
  tableColumns: IAdvancedTableColumnsModel[] = [
    {
      field: 'sport',
      sortField: 'sportName',
      header: 'Sport',
      type: AdvancedTableTemplateEnum.sport,
      width: '12.5%',
      sortable: true,
    },
    {
      field: 'market',
      sortField: 'marketName',
      header: 'Market',
      type: AdvancedTableTemplateEnum.idName,
      width: '12.5%',
      sortable: true,
    },
    {
      field: 'marketFamily',
      sortField: 'marketFamilyName',
      header: 'Market Family',
      type: AdvancedTableTemplateEnum.text,
      width: '12.5%',
      sortable: true,
    },
    {
      field: 'betGroup',
      header: 'Bet Group',
      type: AdvancedTableTemplateEnum.text,
      width: '12.5%',
      sortable: true,
    },
    {
      field: 'description',
      header: 'Description',
      type: AdvancedTableTemplateEnum.text,
      width: '20%',
      sortable: true,
    },
    {
      field: 'options',
      header: 'Options',
      type: AdvancedTableTemplateEnum.coverageOptions,
      width: '20%',
      sortable: true,
    },
    {
      field: 'lastUpdate',
      header: 'Last Update',
      type: AdvancedTableTemplateEnum.formattedDateTime,
      width: '10%',
      sortable: true,
    },
  ];
  updateTable() {}

  onItemsPerPageChange(event: any) {}

  onInlineUpdate(event: any) {}

  onPageChange(event: any) {}

  onSortTable(event: any) {}

  onApplyFilter(event: any) {}

  onSelectQuickFilter(event: any) {}
  onSearchText(event: any) {}
}
