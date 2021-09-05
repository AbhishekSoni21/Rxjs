import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private utility: UtilityService) {}

  @ViewChild('addButton') addButton: ElementRef;
  subscription: Subscription;
  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 0;
    this.subscription = fromEvent(
      this.addButton.nativeElement,
      'click'
    ).subscribe((response) => {
      this.utility.addElements('videoContainer', 'Video ' + ++count);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
