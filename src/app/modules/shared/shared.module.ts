import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatSharedModule } from './mat-shared/mat-shared.module';
import { ThermometerComponent } from './components/thermometer/thermometer.component';

const SHARED_COMPONENTS = [
  ThermometerComponent
];

const SHARED_MODULES = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  MatSharedModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [ThermometerComponent],
  imports: SHARED_MODULES,
  exports: [...SHARED_COMPONENTS, ...SHARED_MODULES],
})
export class SharedModule {}
