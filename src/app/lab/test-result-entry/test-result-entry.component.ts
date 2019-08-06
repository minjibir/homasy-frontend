import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TestService } from '../test.service';
import { TestResult } from '../test-result';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../test-types';

@Component({
  selector: 'app-test-result-entry',
  templateUrl: './test-result-entry.component.html',
  styleUrls: ['./test-result-entry.component.scss']
})
export class TestResultEntryComponent implements OnInit {

  testResultId: number;
  testResult = new TestResult();

  chemistry = CHEMISTRY;
  microbiology = MICROBIOLOGY;
  haematology = HAEMATOLOGY;

  labSelect: string[];
  selectedVal: string[];

  tests: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.testResultId = parseInt(params.get('id'));
          this.loadTestResultData();
        }
      );
  }

  loadTestResultData(): any {
    this.testService
      .getTestResultById(this.testResultId)
      .subscribe(
        (res: TestResult) => {
          this.testResult = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  saveRecord() {
    this.testService
      .recordResult(this.testResult)
      .subscribe(
        res => {
          this.testResult = res
          this.router.navigate(['/lab']);
        },
        err => {
          console.log(err);
        }
      );
  }

  addTest(){}

}
