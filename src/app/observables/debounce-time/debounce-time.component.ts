import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, delay, map, retry, retryWhen, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTImeComponent implements AfterViewInit,OnDestroy{

  constructor(private http: HttpClient) {}
  reqData='';
  reqData2='';
  searchParameter="";
  delayTime=2;
  delayTime2=2;
  @ViewChild('myInput') myInput:ElementRef;
  @ViewChild('myInput2') myInput2:ElementRef;
  subscribe1:Subscription;
  subscribe2:Subscription;

  ngAfterViewInit(){
    const searchTerm= fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(map(event=>event.target.value
      ),debounceTime(this.delayTime*1000))

    const searchTerm2= fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(map(event=>event.target.value
      ),debounce(()=>interval(this.delayTime2*1000)))

     this.subscribe1= searchTerm.subscribe(data=>{this.reqData=data;setTimeout(() => {
       this.reqData='';
     }, 2000);});
     this.subscribe2= searchTerm2.subscribe(data=>{this.reqData2=data;setTimeout(() => {
      this.reqData2='';
    }, 2000);})
  }



  handleDelayChange(e): void {
    this.delayTime2=(+e.target.value);
    this.reqData=''
  }

  ngOnDestroy(){
    this.subscribe1.unsubscribe();
    this.subscribe2.unsubscribe();
  }

}
