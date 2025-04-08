import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false,
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  fb = inject(FormBuilder);
  isEditing: boolean = false;
  constructor() {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['m.osamasasdfasfas@gmail.com'],
      phone: ['+201143687888'],
      gender: ['Male'],
    });
    this.profileForm.disable();
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }
}
