import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../../services/staff';
import { StaffService } from '../../services/staff.service'

@Component({
	selector: 'app-staff-list',
	templateUrl: './staff-list.component.html',
	styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

	staffs: any;
	result: string;

	constructor(
		private staffService: StaffService,
		private router: Router,
		) { }

	ngOnInit() {
		this.loadStaffs();
	}

	loadStaffs() {
		this.staffService
		.getStaffs()
		.subscribe(
			res => {
				this.staffs = res;
			},
			err => {
				console.log(err)
			});
	}

	updateStaff(staff: Staff) {
		this.staffService.updateStaff(staff)
		.subscribe(
			(res: Staff) => {},
			err => console.error(err)
			);
	}

	deleteStaff(staffId: number) {
		if(confirm("Are you sure you want to delete this staff?")) {
			this.staffService.deleteStaff(staffId)
			.subscribe(
				res => this.loadStaffs(),
				err => console.error(err));
		}
	}

}
