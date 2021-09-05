import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-compare-merge-switch-concatmap',
  templateUrl: './compare-merge-switch-concatmap.component.html',
  styleUrls: ['./compare-merge-switch-concatmap.component.css']
})
export class CompareMergeSwitchConcatmapComponent implements OnInit {

  constructor(private utlity:UtilityService) { }

  buyFruit(value):Observable<string>{
    return of(value+' added to cart.').pipe(delay(1000))
  }

  ngOnInit(): void {
    const fruits= from(["Mango","Apple","Orange","Grapes","Strawberry"]);
    const colors= from(["Yellow","Blue","Red","Green","Black","Brown"]);
    const furnitures= from(["Chair","Table","Almirah","Drawer","Sofa set"]);
    setTimeout(() => {
      fruits.pipe(mergeMap(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer',res))
    }, 1500);

    setTimeout(() => {
      colors.pipe(concatMap(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer2',res))
    }, 2000);
    setTimeout(() => {
      furnitures.pipe(switchMap(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer3',res))
    }, 2500);
  }

}
