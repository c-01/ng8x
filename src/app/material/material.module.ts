import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const _material = [
  MatButtonModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [_material],
  exports: [_material]
})
export class MaterialModule {}
