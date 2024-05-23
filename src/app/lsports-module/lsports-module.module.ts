import { NgModule } from '@angular/core';
import { SideMenuModule, MultiSelectModule, AdvancedTableModule } from '@lsports/ui';

@NgModule({
  declarations: [],
  imports: [MultiSelectModule ,SideMenuModule, AdvancedTableModule],
  exports: [MultiSelectModule, SideMenuModule, AdvancedTableModule],
})
export class LSportsModule {}
