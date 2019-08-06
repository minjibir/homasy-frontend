import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointments: any;
  result: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.appointmentService
      .getAppointments()
      .subscribe(
        res => {
          this.appointments = res;
        },
        err => {
          console.log(err)
        }
      );
  }

  // addappointment() {
  //   this.router.navigate(['/records/addappointment']);
  // }

}
