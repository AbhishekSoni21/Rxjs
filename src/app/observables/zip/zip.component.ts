import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements AfterViewInit {

  constructor(private uService:UtilityService) { }
  months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  years =[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]
@ViewChild('month')month:ElementRef;
@ViewChild('year')year:ElementRef;

  ngAfterViewInit(){
    const monthObs=fromEvent<any>(this.month.nativeElement,'change').pipe(map(res=>res.target.value))

    const yearObs= fromEvent<any>(this.year.nativeElement,'change').pipe(map(res=>res.target.value));

    zip(monthObs,yearObs).subscribe(([month,year])=>{
      this.uService.add2Elements('container1',month,year)
    })

  }

}
