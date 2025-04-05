import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html',
  styleUrls: ['./add-pill.component.scss'],
  standalone: false,
})
export class AddPillComponent implements OnInit {
  addPillForm!: FormGroup;
  errorMessage = signal('');
  fb = inject(FormBuilder);
  takeTime: string[] = [
    'Morning',
    'Evening',
    'Night',
    'After Lunch',
    'After Breakfast',
    'Before Lunch',
    'Before BrackFast',
  ];
  selectedTime: string = '';
  times: string[] = [];
  constructor() {
    this.addPillForm = this.fb.group({
      pillName: ['', [Validators.required]],
      takeTime: ['', [Validators.required]],
      time: [[], Validators.required],
      noPerDay: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      selectedTime: [''], // 👈 add this
    });
  }

  ngOnInit() {}
  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
  addTime() {
    const time = this.addPillForm.get('selectedTime')?.value;
    if (this.times.length < 3 && time && !this.times.includes(time)) {
      this.times.push(time);
      this.addPillForm.get('time')?.setValue(this.times); // update form value
      this.addPillForm.get('selectedTime')?.reset(); // clear input
    }
  }
  

  removeTime(index: number) {
    this.times.splice(index, 1);
    this.addPillForm.get('time')?.setValue(this.times); // update form
  }
  compareFn = (a: string, b: string) => a === b;
}
