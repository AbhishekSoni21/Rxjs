import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  name:string;
  @ViewChild('myInput2') myInput2:ElementRef;
  constructor(private uService:UtilityService) { }

  ngOnInit(): void {
    this.uService.authorName.subscribe(data=>this.name=data)
  }

  handleUpdate(){
    this.uService.authorName.next(this.myInput2.nativeElement.value)

  }
}
