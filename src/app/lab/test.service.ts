import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestRequest } from './test-request';
import { TestResult } from './test-result';

const resultUrl = '/api/testresults';
const requestUrl = '/api/testrequests';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  getTestResultById(testResultId: number): Observable<any> {
    return this.http.get(resultUrl + '/' + testResultId);
  }

  getTestRequestsByPatient(patientId: number): Observable<any> {
    return this.http.get<TestRequest[]>(requestUrl + '/' + patientId);
  }

  getTestResultsByPatient(patientId: number): Observable<any> {
    return this.http.get(resultUrl + '/' + patientId);
  }

  getTestRequests(): Observable<any> {
    return this.http.get(requestUrl);
  }

  getTestResults(): Observable<any> {
    return this.http.get(resultUrl);
  }

  recordResult(testResult: TestResult): Observable<TestResult> {
    return this.http.post<TestResult>(resultUrl, testResult);
  }

  makeTestRequest(testRequest: TestRequest): Observable<TestRequest> {
    return this.http.post<TestRequest>(requestUrl, testRequest);
  }

  update(testRequest: TestRequest): Observable<TestRequest> {
    return this.http.put<TestRequest>(requestUrl, testRequest);
  }

}
