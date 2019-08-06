import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient();

  response: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  registerPatient() {
    this.patientService
    .registerPatient(this.patient)
    .subscribe(
      (res: Patient) => {
        this.response = "Patient successfully registered."
        this.patient = new Patient();
      },
      err => {
        console.error(err);
        this.response = "Problem occured. Make sure all fields are correct";
      }
      );
  }

}
