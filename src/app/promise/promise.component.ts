import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promiseValue;
  showButton = true;
  available: boolean;
  dell = {
    brand: 'Dell',
    hardDisk: '4TB',
    ram: '16gb',
    color: 'Grey',
  };

  hp = {
    brand: 'Hp',
    hardDisk: '2TB',
    ram: '6gb',
    color: 'white',
  };

  notAvailable = {
    brand: 'Not Available',
    status: 'Failed',
  };
  lapTopAvailable: string;

  constructor() {}

  dellAvailable() {
    if (this.lapTopAvailable === 'Dell') {
      return true;
    }
    return false;
  }

  hpAvailable() {
    if (this.lapTopAvailable === 'Hp') {
      return true;
    }
    return false;
  }

  ngOnInit(): void {}

  handleClick(value) {
    this.showButton = false;
    this.lapTopAvailable = value;
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          console.info('Promise is resolved...');
          console.table(this.dell);
          resolve('Congrats, Dell is purchased.' + JSON.stringify(this.dell));
        }, 2000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          console.info('Promise is resolved...');
          console.table(this.hp);
          resolve('Congrats, Hp is purchased.' + JSON.stringify(this.hp));
        }, 2000);
      } else {
        return setTimeout(() => {
          console.info('Promise is rejected!!!');
          console.table(this.notAvailable);
          reject('Laptop is not available in any of the store!!!');
        }, 2000);
      }
    });

    buyLaptop
      .then((res) => {
        this.promiseValue = res;
        this.showButton = true;
        this.available = true;
      })
      .catch((err) => {
        this.promiseValue = err;
        this.showButton = true;
        this.available = false;
      });
  }
}
