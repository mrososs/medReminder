import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { TabsComponent } from './components/tabs/tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    IonicModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    TabsComponent,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
