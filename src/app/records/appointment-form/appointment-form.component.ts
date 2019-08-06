import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { VitalsService } from '../../nurse/vitals.service';
import { Vitals } from '../../nurse/vitals';
import { AppointmentService } from '../appointment/appointment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  appointment = new Appointment();

  patientId: number;
  appointmentDate: string;
  appointmentTime: string;

  response: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vitalService: VitalsService,
    private appointmentService: AppointmentService
    ) { }

  ngOnInit() {
    this.response = null
    
    this.route.paramMap
    .subscribe(
      (params: ParamMap) => {
        this.patientId = parseInt(params.get('id'));
      });
  }

  addAppointment() {
    this.appointment.patientId = this.patientId;
    if (
      this.appointment.appointmentDate !== undefined &&
      this.appointment.appointmentTime !== undefined &&
      this.appointment.patientId !== null
      ) {
      this.appointmentService
    .addAppointment(this.appointment)
    .subscribe(
      (res: Appointment) => {
        this.sendForVital(res.patientId);
        this.appointment = new Appointment();
      },
      err => {
        console.log(err);
      });
  }
  else {
    this.response = "All fields must be filled with correct values before submitting.";
  }
}

sendForVital(patientId: number) {
  let vitals = new Vitals();
  vitals.patientId = patientId;

  this.vitalService
  .saveVitals(vitals)
  .subscribe(
    res => this.response = "Appointment Scheduled.",
    err => {
      this.response = "Problem occured. Make sure all fields are correct";
      console.error(err)
    });
}

}
