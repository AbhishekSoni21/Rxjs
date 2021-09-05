import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor(private utility: UtilityService) {}

  subscription: Subscription;
  hideButton = false;

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  unSubscribe() {
    this.subscription.unsubscribe();
    this.hideButton = true;
  }

  subscribe() {
    this.hideButton = false;
    const emitVideos = timer(3000, 1000);
    this.subscription = emitVideos.subscribe((response) => {
      this.utility.addElements('videoContainer', 'Video ' + (response + 1));
    });
  }
}
