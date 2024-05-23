import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
  ],
})
export class PrimengModule {}
