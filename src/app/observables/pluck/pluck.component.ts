import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  subscribe2: Subscription;
  data1: any;
  appendText1 = 'name';
  sub1 = true;

  data2: number;
  appendText2 = 'company';
  sub2 = true;
  sampleData = [
    {
      name: 'Abhishek Soni',
      city: 'Deoria',
      state: 'Uttar Pradesh',
      job: {
        company: 'PwC India',
        designation: 'Senior Consultant',
        experience: '4+',
      },
    },
    {
      name: 'M S Dhoni',
      city: 'Ranchi',
      state: 'Jharkhand',
      job: {
        company: 'Indian Cricket Team',
        designation: 'Ex-Captain',
        experience: '15+',
      },
    },
    {
      name: 'Palak Muchhal',
      city: 'Indore',
      state: 'Madhya Pradesh',
      job: {
        company: 'Bollywood',
        designation: 'Playback Singer',
        experience: '10+',
      },
    },
    {
      name: 'Dilip Joshi',
      city: 'Porbandar',
      state: 'Gujarat',
      job: {
        company: 'Sab Tv',
        designation: 'Actor',
        experience: '30+',
      },
    },
    {
      name: 'Akshay kumar',
      city: 'Amritsar',
      state: 'Punjab',
      job: {
        company: 'Bollywood',
        designation: 'Actor',
        experience: '25+',
      },
    },
  ];

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.startSubscription();
    this.startSubscription2();
  }

  handleChange(e) {
    this.appendText1 = e.target.value;
    this.utilityService.removeChild('pluckContainer');
    this.startSubscription();
  }

  handleChange2(e) {
    this.appendText2 = e.target.value;
    this.utilityService.removeChild('pluckContainer2');
    this.startSubscription2();
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
    const emitData = from(this.sampleData);

    this.subscribe = emitData.pipe(pluck(this.appendText1)).subscribe((res) => {

      this.utilityService.addElements('pluckContainer', res);
    });
  }

  startSubscription2() {
    const emitData = from(this.sampleData);

    this.subscribe = emitData
      .pipe(pluck('job', this.appendText2))
      .subscribe((res) => {
        this.utilityService.addElements('pluckContainer2', res);
      });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
    this.subscribe2.unsubscribe();
  }
}
