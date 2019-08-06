import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: any;
  patientId: number;
  result: any;

  constructor(
    private patientService: PatientService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.reloadPatients();
  }

  reloadPatients() {
    this.patientService
    .getPatients()
    .subscribe(
      res => {
        this.patients = res;
      },
      err => {
        console.log(err)
      });
  }

  addpatient() {
    this.router.navigate(['/records/addpatient']);
  }

  viewPatientDetails(id: number) {
    this.router.navigate(['/records/patientdetails', id]);
  }

  addappointment(id: number) {
    this.router.navigate(['/records/addappointment', id]);
  }

  updatePatientDetails(patient: Patient) {
    this.patientService.updatePatient(patient)
    .subscribe(res=>this.reloadPatients(), err=>console.error(err));
  }
}
