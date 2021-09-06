import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  subscribe2: Subscription;
  subscribe3: Subscription;
  data1: any;
  appendText1 = 13;

  data2: any;
  appendText2 = 'male';

  data3: any;
  appendText3 = 4;
  sampleData = [
    {
      id: 1,
      name: 'Abhishek Soni',
      gender: 'male',
    },
    {
      id: 2,
      name: 'M S Dhoni',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Palak Muchhal',
      gender: 'female',
    },
    {
      id: 4,
      name: 'Dilip Joshi',
      gender: 'male',
    },
    {
      id: 5,
      name: 'Akshay kumar',
      gender: 'male',
    },
    {
      id: 6,
      name: 'K K Menon',
      gender: 'male',
    },
    {
      id: 7,
      name: 'Ronit Roy',
      gender: 'male',
    },
    {
      id: 8,
      name: 'Katrina kaif',
      gender: 'female',
    },
    {
      id: 9,
      name: 'Harleen Deol',
      gender: 'female',
    },
    {
      id: 10,
      name: 'Deepika kumari',
      gender: 'female',
    },
  ];

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.startSubscription();
    this.startSubscription2();
    this.startSubscription3();
  }

  handleChange(e) {
    this.appendText1 = e.target.value;
    this.startSubscription();
  }

  handleChange2(e) {
    this.appendText2 = e.target.value;
    this.startSubscription2();
  }

  handleChange3(e) {
    this.appendText3 = e.target.value;
    this.startSubscription3();
  }

  startSubscription() {
    const emitData = from(this.sampleData);
    this.subscribe = emitData
      .pipe(
        filter((data) => data.name.length >= this.appendText1),
        toArray()
      )
      .subscribe((res) => {
        this.data1 = res;
      });
  }

  startSubscription2() {
    const emitData = from(this.sampleData);
    this.subscribe2 = emitData
      .pipe(
        filter((data) => data.gender === this.appendText2),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
  }

  startSubscription3() {
    const emitData = from(this.sampleData);
    this.subscribe3 = emitData
      .pipe(
        filter((data) => data.id <= this.appendText3),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
    this.subscribe2.unsubscribe();
    this.subscribe3.unsubscribe();
  }
}
