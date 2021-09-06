import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, from } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  data1: string;
  appendText1 = 'Black';
  sub1 = true;

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
    this.utilityService.removeChild('tapContainer');
    this.startSubscription();
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

  startSubscription() {
    const emitVideo = interval(1000);

    this.subscribe = emitVideo
      .pipe(
        tap((data) => {
          if (this.sampleData[data] === this.appendText1) {
            this.subscribe.unsubscribe();
          }
        }),
        map((data) => this.sampleData[data])
      )
      .subscribe((res) =>
        this.utilityService.addElementsWithCOlor('tapContainer', res)
      );
  }

  ngOnDestroy() {
    if(this.subscribe){
      this.subscribe.unsubscribe();

    }
  }
}
