import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  name:string;
  @ViewChild('myInput3') myInput3:ElementRef;
  constructor(private uService:UtilityService) { }

  ngOnInit(): void {
    this.uService.authorName.subscribe(data=>this.name=data)
  }

  handleUpdate(){
    this.uService.authorName.next(this.myInput3.nativeElement.value)
  }

}
