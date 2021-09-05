import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent implements OnInit {
  constructor(private utility: UtilityService) {}

  ngOnInit(): void {
    const subscription = from([
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
      'December',
    ]);

    subscription.subscribe((response) => {
      this.utility.addElements('fromvideoContainer', response);
    });

    const promise = new Promise((resolve) => {
      return setTimeout(() => resolve('Promise is resolved'), 3000);
    });

    const subscription2 = from(promise);
    subscription2.subscribe((response) => {
      this.utility.addElements('fromvideoContainer1', response);
    });

    const subscription3 = from(
      'January,February,March,April,May,June,July,August,September,October,November,December'
    );
    subscription3.subscribe((response) => {
      this.utility.addElements('fromvideoContainer2', response);
    });
  }
}
