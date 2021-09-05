import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  emittedValue;
  subscribeChannel2=true;
  subscribeChannel3=true;
  subscribe2:Subscription;
  constructor(private uService:UtilityService) { }

  ngOnInit(): void {
    this.uService.asyncSubjectData.subscribe(data=>{this.emittedValue=data})
  }

  onAdd(value){
    this.uService.asyncSubjectData.next(value);
  }

  handleSubscribe(){
    this.uService.asyncSubjectData.complete();
  }

}
