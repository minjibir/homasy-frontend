import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../consultation/consultation/consultation.service';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';
import { VitalsService } from '../../nurse/vitals.service';
import { Vitals } from '../../nurse/vitals';
import { TestService } from '../../lab/test.service';
import { TestRequest } from '../../lab/test-request';
import { Consultation } from '../../consultation/consultation/consultation';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  patient = new Patient();
  cons: Consultation[];
  patientId: number;

  tests: TestRequest[];
  vitals: Vitals[];

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private vitalsService: VitalsService,
    private patientService: PatientService,
    private consultationService: ConsultationService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.patientId = parseInt(params.get('id'))
        this.getPatient();
        this.getConsultationsRecord();
        this.getVitals();
        this.getTestResult();
      });
  }

  getPatient() {
    this.patientService
    .getPatientById(this.patientId)
    .subscribe(
      res => {
        this.patient = res;
      },
      err => {
        console.log(err)
      }
      );
  }

  getConsultationsRecord() {
    this.consultationService
    .getConsultationsByPatient(this.patientId)
    .subscribe(
      (res: Consultation[]) => {
        this.cons = res;
      },
      err => {
        console.error(err)
      });
  }

  getVitals() {
    this.vitalsService.getVitalsByPatientId(this.patientId)
    .subscribe(
      (res: Vitals[]) => {
        this.vitals = res
        // console.info(this.vitals);
      },
      err => console.error(err)
      );
  }

  getTestResult() {
    this.testService.getTestRequestsByPatient(this.patientId)
    .subscribe(
      (res: TestRequest[]) => {
        this.tests = res;
        // console.info(this.tests);
      },
      err => console.error(err)
      );
  }
}
