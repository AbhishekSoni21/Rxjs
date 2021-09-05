import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})
export class DistinctUntilChangedComponent implements AfterViewInit,OnDestroy {

  constructor(private http: HttpClient) {}
  reqData='';
  searchParameter="";
  delayTime=2;
  @ViewChild('myInput') myInput:ElementRef;
  subscribe1:Subscription;

  ngAfterViewInit(){
    const searchTerm= fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(map(event=>event.target.value
      ),debounceTime(this.delayTime*1000),distinctUntilChanged())



     this.subscribe1= searchTerm.subscribe(data=>{this.reqData=data;setTimeout(() => {
       this.reqData='';
     }, 2000);});
  }

  ngOnDestroy(){
    this.subscribe1.unsubscribe();
  }

}
