import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  datasource1=["Angular 1","Angular 2"]
  datasource2=["Javascript 1","Javascript 2"]
  datasource3=["Css 1","Css 2"]
  subscribeChannel2=true;
  subscribeChannel3=true;
  subscribe2:Subscription;
  subscribe3:Subscription;
  constructor(private uService:UtilityService) { }

  ngOnInit(): void {
    this.uService.replaySubjectData.subscribe(data=>this.datasource1.push(data))
  }

  onAdd(value){
    this.uService.replaySubjectData.next(value);
  }

  handleSubscribe2(){
    if(this.subscribe2){
      this.subscribe2.unsubscribe()
    }else{
      this.subscribe2=this.uService.replaySubjectData.subscribe(data=>this.datasource2.push(data))

    }
    this.subscribeChannel2=!this.subscribeChannel2;

  }

  handleSubscribe3(){
    if(this.subscribe3){
      this.subscribe3.unsubscribe()
    }else{
      this.subscribe3=this.uService.replaySubjectData.subscribe(data=>this.datasource3.push(data))

    }
    this.subscribeChannel3=!this.subscribeChannel3;
  }

}
