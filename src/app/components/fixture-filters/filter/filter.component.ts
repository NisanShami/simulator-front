import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { PrimengModule } from '../../../primeng-module/primeng/primeng.module';
import { FixtureService } from '../../services/fixture.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [PrimengModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterComponent),
      multi: true,
    },
  ],
})
export class FilterComponent implements ControlValueAccessor, OnInit {
  @Input() entity: any;
  data: any;
  onChange!: Function;
  onTouched!: Function;

  constructor(private fixtureService: FixtureService) {}

  writeValue(value: any): void {
    if (value) {
      setTimeout(() => {
        this.onChange(value);
      }, 1);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {
    this.fixtureService
      .getAllData(
        this.entity,
        this.entity === 'leagues' ? 'sportId=1149112&locationId=73' : ''
      )
      .subscribe((res) => {
        this.data = res;
      });

  }

  onChangeValue(event: any) {
    this.onChange(event?.value?.id);
  }
}
