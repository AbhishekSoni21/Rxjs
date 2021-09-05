import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent implements OnInit {
  result: { name: string; name1: string; name2: string; name3: string };
  constructor(private utility: UtilityService) {}

  ngOnInit(): void {
    this.subscribe();
  }

  subscribe() {
    const subscription = of(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    );
    subscription.subscribe((response) => {
      this.utility.addElements('ofvideoContainer', response);
    });

    const subscription2 = of({
      name: 'React',
      name1: 'Angular',
      name2: 'Vue',
      name3: 'php',
    });

    subscription2.subscribe((response) => {
      this.result = response;
    });
  }
}
