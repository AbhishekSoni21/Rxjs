import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  name:string;
  @ViewChild('myInput') myInput:ElementRef;
  constructor(private uService:UtilityService) { }

  ngOnInit(): void {
    this.uService.authorName.subscribe(data=>this.name=data)
  }

  handleUpdate(){
    this.uService.authorName.next(this.myInput.nativeElement.value)

  }

}
