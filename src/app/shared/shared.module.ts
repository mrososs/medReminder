import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    TextFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    NgxMatTimepickerModule,
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
    MatDatepickerModule,
    TabsComponent,
    NgxMatTimepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    TextFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
