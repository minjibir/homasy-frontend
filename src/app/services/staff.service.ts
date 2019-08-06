import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './staff';

const url = '/api/staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  getStaffs(): Observable<Staff> {
    return this.http.get<Staff>(url);
  }

  registerStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(url, staff);
  }

  updateStaff(staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(url, staff);
  }

  deleteStaff(staffId: number): Observable<any> {
    return this.http.delete<any>(url + '/' + staffId);
  }
}
