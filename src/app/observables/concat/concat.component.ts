import { Component, OnInit } from '@angular/core';
import { concat, from, interval, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
    const fruit = ["Mango","Apple","Orange","Grapes","Strawberry"];
    const colors=["Yellow","Blue","Red","Green","Black","Brown"];
    const furnitures=["Chair","Table","Almirah","Drawer","Sofa set"]
    const source = interval(1000).pipe(map(m=>fruit[m]),take(5));
    const source2 =interval(1000).pipe(map(n=>colors[n]),take(5));
    const source3 =interval(1000).pipe(map(o=>furnitures[o]),take(5));
    const final=concat(source,source2,source3)
    final.subscribe(res=>{
console.log("res", );
this.utility.addElements("customContainer",res)

    })
  }

}
