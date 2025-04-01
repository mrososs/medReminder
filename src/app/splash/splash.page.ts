import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],

  standalone: false,
  animations: [
    trigger('stepTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 0s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms 0s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  finishStepper() {
    this.router.navigate(['/login']); // Navigate to Home Page after onboarding
  }
}
