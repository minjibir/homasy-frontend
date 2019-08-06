import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription';

@Component({
  selector: 'app-prescriptions-record',
  templateUrl: './prescriptions-record.component.html',
  styleUrls: ['./prescriptions-record.component.scss']
})
export class PrescriptionsRecordComponent implements OnInit {

  patientId: number;
  prescriptions: Prescription[];

  constructor(
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit() {
    this.prescriptionService
      .getPrescriptions()
      .subscribe(
        (res: Prescription[]) => {
          this.prescriptions = res
        },
        err => {
          console.log(err)
        }
      );
  }

  prescriptionsByPatient() {
    this.prescriptionService
      .getPrescriptionsByPatient(this.patientId)
      .subscribe(
        (res: Prescription[]) => {
          this.prescriptions = res
        },
        err => {
          console.log(err)
        }
      );
  }
}
