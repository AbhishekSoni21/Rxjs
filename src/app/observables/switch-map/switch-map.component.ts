import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private utlity:UtilityService) { }

  buyFruit(value):Observable<string>{
    return of(value+' added to cart.').pipe(delay(1000))
  }

  ngOnInit(): void {
    const fruits= from(["Mango","Apple","Orange","Grapes","Strawberry"]);
    const colors= from(["Yellow","Blue","Red","Green","Black","Brown"]);
    const furnitures= from(["Chair","Table","Almirah","Drawer","Sofa set"]);
    setTimeout(() => {
      fruits.pipe(map(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer',res))
    }, 1500);

    setTimeout(() => {
      colors.pipe(map(r=>this.buyFruit(r)),switchAll()).subscribe(res=>this.utlity.addElements('customContainer2',res))
    }, 2000);
    setTimeout(() => {
      furnitures.pipe(switchMap(r=>this.buyFruit(r))).subscribe(res=>this.utlity.addElements('customContainer3',res))
    }, 2500);
  }

}
