import { Component, OnInit } from '@angular/core';
import { TestRequest } from '../test-request';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { TestResult } from '../test-result';

@Component({
  selector: 'app-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.scss']
})
export class TestRequestComponent implements OnInit {

  testRequests: TestRequest[];
  testResult: string;
  patientId: number;
  route: any;

  resultIsReady: boolean;

  constructor(
    private router: Router,
    private testService: TestService
    ) { }

  ngOnInit() {
    this.testService
    .getTestRequests()
    .subscribe(
      (res: TestRequest[]) => {
        this.testRequests = res;
      },
      err => {
        console.log(err)
      }
      );
  }

  provideTestResult(testRequestId: number) {
    this.router.navigate(['patient-details', testRequestId]);
  }

  viewTestResult(testRequestId: number) {
    this.router.navigate(['test-result-entry', testRequestId]);
  }

  searchRequestByPatient() {
    this.testService
    .getTestRequestsByPatient(this.patientId)
    .subscribe(
      (res: TestRequest[]) => {
        this.testRequests = res;
      },
      err => {
        console.log(err)
      }
      );
  }

  updateResult(testRequest: TestRequest) {
    testRequest.tested = true;
    this.testService
    .update(testRequest)
    .subscribe(
      (res: TestRequest) => testRequest = res,
      err => console.error(err)
      );
  }
}