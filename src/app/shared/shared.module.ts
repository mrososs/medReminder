import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatStepperModule, MatButtonModule,MatIconModule],
  exports:[MatButtonModule,MatStepperModule,MatIconModule]
})
export class SharedModule {}
