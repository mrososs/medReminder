import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: false,
})
export class HomePageComponent implements OnInit {
  reminders = [
    {
      id: 1,
      period: 'Morning',
      title: 'Panadol Extra 500mg',
      time: 'Take at 8:00 am',
      number: '2',
      checked: false,
    },
    {
      id: 2,
      period: 'Evening',
      title: 'Vitamin C 1000mg',
      time: 'Take at 8:00 pm',
      number: '2',

      checked: false,
    },
    {
      id: 3,
      period: 'Night',
      title: 'Magnesium',
      time: 'Take at 11:00 pm',
      number: '2',

      checked: false,
    },
  ];
  isChecked = false;
  isTake = false;

  constructor() {}

  ngOnInit() {}
  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
  toggleCheck(pillId: number): void {
    const pill = this.reminders.find((item) => item.id === pillId);
    if (pill) {
      pill.checked = !pill.checked;
    }
  }
  toggleTakePill(){
    this.isTake=!this.isTake

  }
}
