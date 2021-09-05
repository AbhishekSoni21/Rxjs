import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private utlity:UtilityService) { }

  buyFruit(value):Observable<string>{
    return of(value+" added to cart.").pipe(delay(1000))
  }

  ngOnInit(): void {
    const fruits= from(["Mango","Apple","Orange","Grapes","Strawberry"]);
    const colors= from(["Yellow","Blue","Red","Green","Black","Brown"]);
    const furnitures= from(["Chair","Table","Almirah","Drawer","Sofa set"]);
    setTimeout(() => {
      fruits.pipe(map(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer',res))
    }, 1500);

    setTimeout(() => {
      colors.pipe(map(r=>this.buyFruit(r)),concatAll()).subscribe(res=>this.utlity.addElements('customContainer2',res))
    }, 2000);
    setTimeout(() => {
      furnitures.pipe(concatMap(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer3',res))
    }, 2500);
  }

}
