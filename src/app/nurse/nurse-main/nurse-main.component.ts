import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../vitals.service';
import { Vitals } from '../vitals';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
	selector: 'app-nurse-main',
	templateUrl: './nurse-main.component.html',
	styleUrls: ['./nurse-main.component.scss']
})
export class NurseMainComponent implements OnInit {

	vitals: any;

	constructor(
		private vitalsService: VitalsService,
		private router: Router,
		) { }

	ngOnInit() {
		this.vitalsService
		.getVitals()
		.subscribe(res => this.vitals = res, err => console.error(err));
	}

	save(vitals: Vitals) {
		this.vitalsService
		.updateVitals(vitals)
		.subscribe(res => console.info('success'), err => console.error(err));
	}
}
