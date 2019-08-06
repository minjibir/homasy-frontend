import { Component, OnInit } from '@angular/core';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../../lab/test-types';
import { Consultation } from '../consultation/consultation';
import { Prescription } from '../../pharmacy/prescription';
import { TestRequest } from '../../lab/test-request';
import { Router } from '@angular/router';
import { ConsultationService } from '../consultation/consultation.service';
import { PrescriptionService } from '../../pharmacy/prescription.service';
import { TestService } from '../../lab/test.service';

@Component({
  selector: 'app-consultation-main',
  templateUrl: './consultation-main.component.html',
  styleUrls: ['./consultation-main.component.scss']
})
export class ConsultationMainComponent implements OnInit {

  chemistry = CHEMISTRY;
  microbiology = MICROBIOLOGY;
  haematology = HAEMATOLOGY;

  patientId: number;

  consultation = new Consultation();
  prescription = new Prescription();
  testRequest = new TestRequest();

  testRequestHolder: string[];

  response: any;

  constructor(
    private router: Router,
    private consultationService: ConsultationService,
    private prescriptionService: PrescriptionService,
    private testService: TestService,
    ) { }

  ngOnInit() {
  }

  submitConsultation() {
    this.addTestType();
    // 
    if (
      this.consultation.patientId !== undefined &&
      this.consultation.diagnosis !== null &&
      this.consultation.complaint !== null &&
      this.prescription.prescriptionContent !== null
      ) {

      this.consultationService
    .saveConsultation(this.consultation)
    .subscribe(
      (res: Consultation) => {
        this.consultation = res;

        this.prescription.patientId = this.consultation.patientId;
        this.prescription.doctorId = this.consultation.doctorId;
        this.prescription.consultationId = this.consultation.consultationId;

        this.testRequest.consultationId = this.consultation.consultationId;
        this.testRequest.patientId = this.consultation.patientId;
        this.testRequest.doctorId = this.consultation.doctorId;

        this.savePrescription();
        this.requestTest();

        this.response = "Record successfully saved.";
        this.consultation = new Consultation();

      },
      err => { 
        console.error(err)
        this.response = "Error: Check all inputs and try again.";
      });
  }
}

addTestType() {
  let values = '';

  for( let index in this.testRequestHolder) {
    values = values + this.testRequestHolder[index].toString() + ',';
  }

  this.testRequest.testsRequested = values;
}

savePrescription() {
  this.prescriptionService
  .addPrescription(this.prescription)
  .subscribe(
    (res: Prescription) => {
      this.prescription = new Prescription();
    },
    err => {
      console.error(err);
    });
}

requestTest() {
  if (
    this.testRequest.patientId !== 0 &&
    this.testRequest.consultationId !== 0 &&
    this.testRequest.testsRequested !== '' &&
    this.testRequest.testsRequested !== undefined &&
    this.testRequest.testsRequested !== null
    ) {
    this.testService
  .makeTestRequest(this.testRequest)
  .subscribe(
    (res: TestRequest) => {
      this.testRequest = new TestRequest();
      console.info(res)
      this.testRequestHolder = [];
    },
    err => console.error(err));
}
}


patientdetails() {
  if (this.consultation.patientId !== null && this.consultation.patientId !== undefined)
    this.router.navigate(['/records/patientdetails', this.consultation.patientId]);
}

addappointment() {
  if (this.consultation.patientId !== null && this.consultation.patientId !== undefined)
    this.router.navigate(['/records/addappointment', this.consultation.patientId]);
}

clearTests() {
  this.testRequestHolder = []
}

}
