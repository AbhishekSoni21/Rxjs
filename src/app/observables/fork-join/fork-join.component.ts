import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { deprecate } from 'util';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements AfterViewInit {

  constructor(private uService:UtilityService){}

  months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  years =[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]
@ViewChild('month')month:ElementRef;
@ViewChild('year')year:ElementRef;

  ngAfterViewInit(){
    const monthObs=fromEvent<any>(this.month.nativeElement,'change').pipe(map(res=>res.target.value),take(2))

    const yearObs= fromEvent<any>(this.year.nativeElement,'change').pipe(map(res=>res.target.value),take(3));

    forkJoin([monthObs,yearObs]).subscribe(([month,year])=>{
      this.uService.add2Elements('container1',month,year)
    })

  }

}
