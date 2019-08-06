import { Injectable } from '@angular/core';
import { Vitals } from './vitals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = '/api/vitals';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  
  constructor(private http: HttpClient) { }

  getVitals(): Observable<any> {
    return this.http.get(url);
  }

  getVitalsByPatientId(patientId: number): Observable<any> {
    return this.http.get<Vitals[]>(url + '/' + patientId);
  }

  saveVitals(vitals: Vitals): Observable<Vitals> {
    return this.http.post<Vitals>(url, vitals);
  }

  updateVitals(vitals: Vitals): Observable<Vitals> {
    return this.http.put<Vitals>(url, vitals);
  }
}
