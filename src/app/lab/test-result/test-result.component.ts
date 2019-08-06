import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {

  tests: any;

  constructor(
    private router: Router,
    private labResultService: TestService
  ) { }

  ngOnInit() {
    this.labResultService
    .getTestResults()
    .subscribe(
      res => {
        this.tests = res
      },
      err => {
        console.log(err)
      }
    );
  }

  recordTest() {
    this.router.navigate(['/lab/resultentry']);
  }

}
