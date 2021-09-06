import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, throwError } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {


  authorName=new BehaviorSubject('Abhishek Soni');

  replaySubjectData=new ReplaySubject<string>(3);

  public asyncSubjectData=new AsyncSubject();


  public shareReplayEndpoints =this.http.get("https://gorest.co.in/public/v1/users").pipe(shareReplay(1))
  constructor(private http:HttpClient) {}

  getUsers():Observable<any>{
    return this.shareReplayEndpoints
  }

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

  add2Elements(container, value1, value2) {
    let element = document.getElementById(container);
    let newElement = document.createElement('li');
    newElement.innerHTML ='You have selected '+ value1 + ' as month and ' + value2 +' as year!!!';
    element.appendChild(newElement);
  }

  removeChild(container) {
    document.getElementById(container).classList.remove('error', 'success');
    document.getElementById(container).innerHTML = '';
  }

  errorHandler(error){
    return throwError(error)
  }
}
