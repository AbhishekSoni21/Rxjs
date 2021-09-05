import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {


  authorName=new BehaviorSubject('Abhishek Soni');

  replaySubjectData=new ReplaySubject<string>(3);

  public asyncSubjectData=new AsyncSubject();

  constructor() {}

  addElements(container, value) {
    let element = document.getElementById(container);
    let newElement = document.createElement('li');
    newElement.innerHTML = value;
    element.appendChild(newElement);
  }

  addElementsWithCOlor(container, value) {
    let element = document.getElementById(container);
    let newElement = document.createElement('li');
    newElement.innerHTML = value;
    newElement.setAttribute('style', `color:${value}`);
    element.appendChild(newElement);
  }

  add3Elements(container, value1, value2, value3) {
    let element = document.getElementById(container);
    let newElement = document.createElement('li');
    newElement.innerHTML = value1 + ' * ' + value2 + ' = ' + value3;
    element.appendChild(newElement);
  }

  removeChild(container) {
    document.getElementById(container).classList.remove('error', 'success');
    document.getElementById(container).innerHTML = '';
  }
}
