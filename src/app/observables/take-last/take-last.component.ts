import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, from } from 'rxjs';
import { takeLast, map, tap } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css'],
})
export class TakeLastComponent implements OnInit, OnDestroy {
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
    'Azure',
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
    this.appendText1 = e.target.value;
    this.subscribe.unsubscribe();
    this.utilityService.removeChild('takeLastContainer');
    this.startSubscription();
  }
  startSubscription() {
    const emitVideo = from(this.sampleData);

    this.subscribe = emitVideo
      .pipe(takeLast(this.appendText1))
      .subscribe((res) =>
        this.utilityService.addElementsWithCOlor('takeLastContainer', res)
      );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
