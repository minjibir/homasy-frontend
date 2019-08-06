import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = '/api/appointments'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(url, appointment)
  }

  getAppointments(): Observable<Appointment> {
    return this.http.get<Appointment>(url)
  }
}
