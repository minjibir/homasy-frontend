import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = '/api/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient> {
    return this.http.get<Patient>(url);
  }

  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(url + '/' + patientId);
  }

  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(url, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(url, patient);
  }
}
