import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit, OnDestroy {
  constructor(private utility: UtilityService) {}

  subscription: Subscription;
  hideButton = false;

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();

    }
  }

  unSubscribe() {
    this.subscription.unsubscribe();
    this.hideButton = true;
  }

  subscribe() {
    this.hideButton = false;
    const emitVideos = interval(2000);
    this.subscription = emitVideos.subscribe((response) => {
      this.utility.addElements('videoContainer', 'Video ' + (response + 1));
    });
  }
}
