import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-result-view',
  templateUrl: './test-result-view.component.html',
  styleUrls: ['./test-result-view.component.scss']
})
export class TestResultViewComponent implements OnInit {

  testResultId: number;

  constructor(
    private testService: TestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.testResultId = this.activatedRoute.paramMap('id');
    // this.testService
    //   .getTestResultById(this.testResultId)
    //   .subscribe(
    //     (res: TestResult) => {

    //     },
    //     err => {
    //       alert('Unable to get result at this time. Please try again later.');
    //       console.log(err);
    //     }
    //   );
  }

}
