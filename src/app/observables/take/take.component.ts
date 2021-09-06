import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit, OnDestroy {
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
    this.utilityService.removeChild('takeContainer');
    this.startSubscription();
  }
  startSubscription() {
    const emitVideo = interval(1000);

    this.subscribe = emitVideo
      .pipe(
        take(this.appendText1),
        map((data) => this.sampleData[data])
      )
      .subscribe((res) =>
        this.utilityService.addElementsWithCOlor('takeContainer', res)
      );
  }

  ngOnDestroy() {
    if(this.subscribe){
      this.subscribe.unsubscribe();

    }
  }
}
