import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from './prescription';

const url = '/api/prescriptions';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  getPrescriptions(): Observable<any> {
    return this.http.get(url);
  }

  getPrescriptionsByPatient(patientId: number): Observable<any> {
    return this.http.get(url + '/' + patientId);
  }

  addPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(url, prescription);
  }

  update(prescription: Prescription): Observable<Prescription> {
    return this.http.put<Prescription>(url, prescription);
  }
}
