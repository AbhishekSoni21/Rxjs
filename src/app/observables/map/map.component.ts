import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  subscribe2: Subscription;
  data1: string;
  appendText1 = 'Video';
  sub1 = true;

  data2: number;
  appendText2 = 5;
  sub2 = true;
  multiplier: number;
  appendText3 = 'name';

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.startSubscription();
    this.startSubscription2();
    this.startSubscription3();
  }

  handlechange(e) {
    this.appendText1 = e.target.value;
  }

  handlechange2(e) {
    this.appendText2 = e.target.value;
  }

  handleChange3(e) {
    this.appendText3 = e.target.value;
    this.utilityService.removeChild('objectcontainer');
    this.startSubscription3();
  }

  toggle() {
    if (this.sub1) {
      this.subscribe.unsubscribe();
      this.sub1 = false;
    } else {
      this.startSubscription();
      this.sub1 = true;
    }
  }
  toggle2() {
    if (this.sub2) {
      this.subscribe2.unsubscribe();
      this.sub2 = false;
    } else {
      this.utilityService.removeChild('tableRenderer');
      this.startSubscription2();
      this.sub2 = true;
    }
  }
  startSubscription() {
    const emitVideo = interval(1000);

    this.subscribe = emitVideo
      .pipe(map((data) => this.appendText1 + ' ' + data))
      .subscribe((res) => (this.data1 = res));
  }

  startSubscription2() {
    const emitVideo = interval(1000);

    this.subscribe2 = emitVideo
      .pipe(
        map((data) => {
          this.multiplier = data + 1;
          return data + 1;
        }),
        map((data) => +this.appendText2 * +data)
      )
      .subscribe((res) =>
        this.utilityService.add3Elements(
          'tableRenderer',
          this.appendText2,
          this.multiplier,
          res
        )
      );
  }

  startSubscription3() {
    const sampleData = [
      {
        name: 'Abhishek Soni',
        city: 'Deoria',
        state: 'Uttar Pradesh',
      },
      {
        name: 'M S Dhoni',
        city: 'Ranchi',
        state: 'Jharkhand',
      },
      {
        name: 'Palak Muchhal',
        city: 'Indore',
        state: 'Madhya Pradesh',
      },
      {
        name: 'Dilip Joshi',
        city: 'Porbandar',
        state: 'Gujarat',
      },
      {
        name: 'Akshay kumar',
        city: 'Amritsar',
        state: 'Punjab',
      },
    ];

    from(sampleData)
      .pipe(map((data) => data[this.appendText3]))
      .subscribe((res) => {
        this.utilityService.addElements('objectcontainer', res);
      });
  }

  ngOnDestroy() {
    if( this.subscribe){
      this.subscribe.unsubscribe();

    }
    if(this.subscribe2){
      this.subscribe2.unsubscribe();

    }
  }
}
