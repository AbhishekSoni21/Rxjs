import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-share-replay-child1',
  templateUrl: './share-replay-child1.component.html',
  styleUrls: ['./share-replay-child1.component.css']
})
export class ShareReplayChild1Component implements OnInit {

  constructor(private uService:UtilityService) { }
  data=[];
  ngOnInit(): void {
    this.uService.getUsers().subscribe(res=>this.data=res.data)
  }

}
