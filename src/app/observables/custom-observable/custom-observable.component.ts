import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  customObservable2: any;
  customObservable3: any;
  constructor(private utility: UtilityService) {}
  errorState = false;
  completeState = false;
  error = false;
  customObservable;
  hide = true;
  time1 = 1;
  time2 = 1;
  time3 = 1;
  sub = true;
  error2 = false;
  data = ['Angular', 'React', 'Typescript', 'Javascript', 'NodeJs'];
  randomName = '';
  errorState3 = false;
  completeState3 = false;
  hide3 = true;
  error3 = false;

  ngOnInit(): void {
    this.subscribe();
    this.subscribe2();
    this.subscribe3();
  }

  handlechange(event) {
    this.time1 = +event.target.value;
    this.utility.removeChild('customContainer');
    this.errorState = false;
    this.completeState = false;
    this.hide = true;
    this.error = this.error;
    this.subscribe();
  }

  handlechange2(event) {
    this.time2 = +event.target.value;
    this.sub = true;
    this.utility.removeChild('customContainer2');
    this.customObservable2.unsubscribe();
    this.subscribe2();
  }

  toggle() {
    // this.customObservable.unsubscribe();
    this.utility.removeChild('customContainer');
    this.error = !this.error;
    this.hide = true;
    this.errorState = false;
    this.completeState = false;
    this.subscribe();
  }

  handleSubscribe() {
    this.sub = !this.sub;
    if (!this.sub) {
      this.customObservable2.unsubscribe();
    } else {
      this.subscribe2();
    }
  }

  subscribe() {
    const _this = this;
    this.customObservable = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, _this.time1 * 1000);
      setTimeout(() => {
        observer.next('React');
      }, (_this.time1 + 2) * 1000);
      setTimeout(() => {
        observer.next('Typescript');
        if (_this.error) {
          observer.error(new Error('network error'));
        }
      }, (_this.time1 + 3) * 1000);
      setTimeout(() => {
        observer.next('Javascript');
      }, (_this.time1 + 4) * 1000);
      setTimeout(() => {
        observer.next('Node');
      }, (_this.time1 + 5) * 1000);
      setTimeout(() => {
        observer.next('MongoDB');
        if (!_this.error) {
          observer.complete();
        }
      }, (_this.time1 + 6) * 1000);
    });

    this.customObservable.subscribe(
      (res) => {
        this.utility.addElements('customContainer', res);
      },
      (err) => {
        this.errorState = true;
        this.hide = false;
      },
      (complete) => {
        this.completeState = true;
        this.hide = false;
      }
    );
  }

  subscribe2() {
    const _this = this;
    const cusObservable2 = Observable.create((observer) => {
      let count = 1;
      setInterval(() => {
        observer.next('Video ' + count++);
        if (count >= 6) {
          observer.complete();
        }
      }, this.time2 * 1000);
    });

    this.customObservable2 = cusObservable2.subscribe((res) => {
      this.utility.addElements('customContainer2', res);
    });
  }

  subscribe3() {
    const cusObservable3 = Observable.create((observe) => {
      let count = 0;
      setInterval(() => {
        observe.next(this.data[count++]);
        if (this.error2) {
          observe.error('Error occured');
        }
        if (count > 2 && this.error3) {
          observe.error('error occured');
        }
        if (count >= 5) {
          observe.complete();
        }
      }, this.time3 * 1000);
    });

    this.customObservable3 = cusObservable3.subscribe(
      (response) => {
        this.randomName = response;
      },
      (err) => {
        this.errorState3 = true;
        this.hide3 = false;
      },
      (complete) => {
        this.completeState3 = true;
        this.hide3 = false;
      }
    );
  }

  toggle3() {
    // this.customObservable.unsubscribe();
    this.randomName = '';
    this.error3 = !this.error3;
    this.hide3 = true;
    this.errorState3 = false;
    this.completeState3 = false;
    this.subscribe3();
  }
  handlechange3(event) {
    this.time3 = +event.target.value;
    this.randomName = '';
    this.hide3 = true;
    this.completeState3 = false;
    this.errorState3 = false;
    this.customObservable3.unsubscribe();
    this.subscribe3();
  }

  ngOnDestroy() {
    if(this.customObservable2){
      this.customObservable2.unsubscribe();
    }
  }
}
