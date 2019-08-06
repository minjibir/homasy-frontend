import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NurseHeaderComponent } from './nurse-header/nurse-header.component';
import { NurseMainComponent } from './nurse-main/nurse-main.component';
import { NursePatientComponent } from './nurse-patient/nurse-patient.component';
import { NurseComponent } from './nurse/nurse.component';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	RouterModule
	],
	declarations: [NurseHeaderComponent, NurseMainComponent, NursePatientComponent, NurseComponent]
})
export class NurseModule { }
