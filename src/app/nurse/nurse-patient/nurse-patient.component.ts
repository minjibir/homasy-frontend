import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../vitals.service';
import { Vitals } from '../vitals';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


@Component({
	selector: 'app-nurse-patient',
	templateUrl: './nurse-patient.component.html',
	styleUrls: ['./nurse-patient.component.scss']
})
export class NursePatientComponent implements OnInit {

	vitals: Vitals[];

	constructor(
		private vitalsService: VitalsService,
		private router: Router,
		) { }


	ngOnInit() {
		this.vitalsService
		.getVitals()
		.subscribe(
			(res: Vitals[]) => {
				this.vitals = res;
			},
			err => {
				console.error(err)
			});
	}

}
