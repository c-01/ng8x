import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
} from '@angular/material';

const _material = [
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  imports: [_material],
  exports: [_material]
})
export class MaterialModule {}
