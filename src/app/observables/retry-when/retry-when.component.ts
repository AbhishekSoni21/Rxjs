import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.css'],
})
export class RetryWhenComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users;
  status = null;
  msg = '';
  loading = true;
  retryStatus = '';
  delayValue = 2;
  retryCount = 3;
  errorVal = true;
  errorValue = true;
  errorValue1 = false;
  ngOnInit(): void {
    this.fetchData(this.errorValue, this.errorValue1);
  }

  handleDelayChange(e, errorVal, errorVal1): void {
    this.delayValue = +e.target.value;
    this.fetchData(errorVal, errorVal1);
  }

  handleRetryCountChange(e, errorVal, errorVal1): void {
    this.retryCount = +e.target.value;
    this.fetchData(errorVal, errorVal1);
  }

  returnApiUrl(errorVal, errorVal1): string {
    if (errorVal) {
      return 'https://fakerestapi.azurewebsites.net/api/v1/User';
    } else {
      return 'https://fakerestapi.azurewebsites.net/api/v1/Users';
    }
  }

  fetchData(errorVal, errorVal1): void {
    this.loading = true;
    this.status = null;
    this.http
      .get(this.returnApiUrl(errorVal, errorVal1))
      .pipe(
        retryWhen((err) =>
          err.pipe(
            delay(this.delayValue * 1000),
            scan((retryCount) => {
              this.retryStatus = 'Retrying... Attempt # ' + (retryCount + 1);
              if (retryCount >= this.retryCount) {
                throw err;
              } else {
                retryCount += 1;
              }
              return +retryCount;
            }, 0)
          )
        )
      )
      .subscribe(
        (data) => {
          this.users = data;
          this.msg = 'Data fetched successfully.';
          this.status = true;
          this.loading = false;
        },
        (err) => {
          this.retryStatus = '';
          this.msg = 'Error occured while fetching data.';
          this.status = false;
          this.loading = false;
          this.users = [];
          console.log(err);
        }
      );
  }
}
