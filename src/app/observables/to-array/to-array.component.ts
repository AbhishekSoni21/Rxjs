import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor(private utility: UtilityService) {}
  arrayData: string[];
  arrayData2: {}[];
  arrayData3: string[];
  data = [
    { name: 'Abhishek Soni', skill: 'Developer' },
    { name: 'M S Dhoni', skill: 'Cricketer' },
    { name: 'Akshay Kumar', skill: 'Actor' },
    { name: 'Katrina Kaif', skill: 'Actress' },
    { name: 'Palak Muchal', skill: 'Singer' },
  ];
  ngOnInit(): void {
    let subscription = interval(1000);

    subscription.pipe(take(5), toArray()).subscribe((response) => {
      this.arrayData = response.map((data) => 'Video ' + (data + 1));
    });

    let subscription2 = from(this.data);

    subscription2.pipe(toArray()).subscribe((response) => {
      this.arrayData2 = response;
    });

    let subscription3 = of(
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

    subscription3.pipe(toArray()).subscribe((response) => {
      this.arrayData3 = response;
    });
  }
}
