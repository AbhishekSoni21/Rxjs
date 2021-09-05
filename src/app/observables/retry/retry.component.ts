import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users;
  status = null;
  msg = '';
  loading = true;
  retryValue = 2;
  errorVal = true;
  errorValue = true;
  errorValue1 = false;
  ngOnInit(): void {
    this.fetchData(this.errorValue, this.errorValue1);
  }

  handleChange(e, errorVal, errorVal1) {
    this.retryValue = e.target.value;
    this.fetchData(errorVal, errorVal1);
  }

  returnApiUrl(errorVal, errorVal1) {
    if (errorVal) {
      return 'https://fakerestapi.azurewebsites.net/api/v1/User';
    } else {
      return 'https://fakerestapi.azurewebsites.net/api/v1/Users';
    }
  }

  fetchData(errorVal, errorVal1) {
    this.loading = true;
    this.status = null;
    this.http
      .get(this.returnApiUrl(errorVal, errorVal1))
      .pipe(retry(this.retryValue))
      .subscribe(
        (data) => {
          this.users = data;
          this.msg = 'Data fetched successfully.';
          this.status = true;
          this.loading = false;
        },
        (err) => {
          this.msg = 'Error occured while fetching data.';
          this.status = false;
          this.loading = false;
          this.users = [];
        }
      );
  }
}
