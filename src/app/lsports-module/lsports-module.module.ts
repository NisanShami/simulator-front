import { NgModule } from '@angular/core';
import { SideMenuModule, MultiSelectModule } from '@lsports/ui';

@NgModule({
  declarations: [],
  imports: [MultiSelectModule ,SideMenuModule],
  exports: [MultiSelectModule, SideMenuModule],
})
export class LSportsModule {}
