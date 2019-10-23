import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntranceComponent } from './entrance/entrance.component';
import { LabComponent } from './lab/lab/lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy/pharmacy.component';
import { TestResultEntryComponent } from './lab/test-result-entry/test-result-entry.component';
import { TestRequestComponent } from './lab/test-request/test-request.component';
import { PharmacyMainComponent } from './pharmacy/pharmacy-main/pharmacy-main.component';
import { PrescriptionsComponent } from './pharmacy/prescriptions/prescriptions.component';
import { PrescriptionsRecordComponent } from './pharmacy/prescriptions-record/prescriptions-record.component';
import { AppointmentComponent } from './records/appointment/appointment.component';
import { AppointmentFormComponent } from './records/appointment-form/appointment-form.component';
import { AddPatientComponent } from './records/patient-form/patient-form.component';
import { PatientDetailsComponent } from './records/patient-details/patient-details.component';
import { ConsultationComponent } from './consultation/consultation/consultation.component';
import { RecordsMainComponent } from './records/records-main/records-main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecordsComponent } from './records/records/records.component';
import { PatientComponent } from './records/patient/patient.component';
import { StaffListComponent } from './records/staff-list/staff-list.component';
import { RegisterStaffComponent } from './records/register-staff/register-staff.component';
import { ConsultationMainComponent } from './consultation/consultation-main/consultation-main.component';
import { NurseComponent } from './nurse/nurse/nurse.component';
import { NurseMainComponent } from './nurse/nurse-main/nurse-main.component';

import { AuthGuard } from './guards/auth.guard';
import { RecordsGuard } from './guards/records.guard';
import { LabGuard } from './guards/lab.guard';
import { ConsultationGuard } from './guards/consultation.guard';
import { PharmacyGuard } from './guards/pharmacy.guard';
import { NurseGuard } from './guards/nurse.guard';

const routes: Routes = [

  // { path: '', component: EntranceComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // Records paths
  {
    path: 'records',
    component: RecordsComponent,
    // canActivate: [AuthGuard, RecordsGuard],
    children: [
      { path: '', component: RecordsMainComponent },
      { path: 'patients', component: PatientComponent },
      { path: 'appointments', component: AppointmentComponent },
      { path: 'addpatient', component: AddPatientComponent },
      { path: 'addappointment/:id', component: AppointmentFormComponent },
      { path: 'patientdetails/:id', component: PatientDetailsComponent },
      { path: 'staffs', component: StaffListComponent },
      { path: 'registerstaff', component: RegisterStaffComponent },
    ]
  },

  // Consultation paths
  {
    path: 'consultation',
    component: ConsultationComponent,
    // canActivate: [AuthGuard, ConsultationGuard],
    children: [
      { path: '', component: ConsultationMainComponent },
    ]
  },

  // Lab paths
  {
    path: 'lab',
    component: LabComponent,
    // canActivate: [AuthGuard, LabGuard],
    children: [
      // { path: '', component: LabMainComponent },
      { path: '', component: TestRequestComponent },
      { path: 'test-requests', component: TestRequestComponent },
      // { path: 'test-results', component: TestResultComponent },
      // { path: 'test-result-view/:id', component: TestResultViewComponent },
      { path: 'test-result-entry/:id', component: TestResultEntryComponent },
    ]
  },

  // Pharmacy paths
  {
    path: 'pharmacy',
    component: PharmacyComponent,
    // canActivate: [AuthGuard, PharmacyGuard],
    children: [
      // { path: '', component: PharmacyMainComponent },
      { path: '', component: PrescriptionsComponent },
      { path: 'prescriptions', component: PrescriptionsComponent },
      // { path: 'records', component: PrescriptionsRecordComponent },
    ]
  },

  // Nurse paths
  {
    path: 'nurse',
    component: NurseComponent,
    // canActivate: [AuthGuard, NurseGuard],
    children: [
      { path: '', component: NurseMainComponent }
    ]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
