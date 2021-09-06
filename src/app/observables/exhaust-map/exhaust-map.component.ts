import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {

  @ViewChild('but') btn:ElementRef;
  constructor(private http:HttpClient) { }

  num=0;

  value=0;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    fromEvent(this.btn.nativeElement,'click').pipe(exhaustMap(()=>this.saveRequest(this.num++))).subscribe(res=>{
      this.value=res['name']

      // concatMap(()=>this.saveRequest(this.num++))
    })
  }

  saveRequest(value){
    return this.http.put('https://reqres.in/api/users/2',{"name":value,"job":"zion resident"}
  )}

  handleSave(){
    // this.num++;
    // this.saveRequest(this.num).subscribe(res=>{
    // })
  }

}
