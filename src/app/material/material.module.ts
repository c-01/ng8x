import { NgModule } from '@angular/core';
import {MatButtonModule, MatSliderModule} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatSliderModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
