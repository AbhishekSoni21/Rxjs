import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css'],
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  data1: string;
  appendText1 = 5;

  sampleData = [
    'Yellow',
    'Blue',
    'Red',
    'Green',
    'Black',
    'Brown',
    'Teal',
    'Silver',
    'Purple',
    'Navy blue',
    'Pea green',
    'Gray',
    'Orange',
    'Maroon',
    'Charcoal',
    'Aquamarine',
    'Coral',
    'Fuchsia',
    'Wheat',
    'Lime',
    'Crimson',
    'Khaki',
    'Hot pink',
    'Magenta',
    'Olden',
    'Plum',
    'Olive',
    'Cyan',
  ];

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.startSubscription();
  }

  handleChange(e) {
    this.appendText1 = +e.target.value;
    this.subscribe.unsubscribe();
    this.utilityService.removeChild('takeUntilContainer');
    this.startSubscription();
  }
  startSubscription() {
    const emitVideo = interval(1000);

    const time = timer((1 + this.appendText1) * 1000);

    this.subscribe = emitVideo
      .pipe(
        takeUntil(time),
        map((data) => this.sampleData[data])
      )
      .subscribe((res) =>
        this.utilityService.addElementsWithCOlor('takeUntilContainer', res)
      );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
