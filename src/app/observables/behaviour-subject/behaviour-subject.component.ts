import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css']
})
export class BehaviourSubjectComponent implements OnInit {

  constructor(private uService:UtilityService) { }
  name:string;
  ngOnInit(): void {
    this.uService.authorName.subscribe(data=>this.name=data)
  }

}
