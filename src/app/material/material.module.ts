import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

const _material = [
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: [_material],
  exports: [_material]
})
export class MaterialModule {}
