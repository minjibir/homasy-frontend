import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecordsComponent } from './records/records.component';
import { RecordsMainComponent } from './records-main/records-main.component';
import { RecordsSideNavComponent } from './records-side-nav/records-side-nav.component';
import { RecordsHeaderComponent } from './records-header/records-header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AddPatientComponent } from './patient-form/patient-form.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecordsComponent,
    RecordsMainComponent,
    RecordsSideNavComponent,
    RecordsHeaderComponent,
    PatientComponent,
    AppointmentComponent,
    AppointmentFormComponent,
    AddPatientComponent,
    PatientDetailsComponent,
    RegisterStaffComponent,
    StaffListComponent
  ]
})
export class RecordsModule { }
