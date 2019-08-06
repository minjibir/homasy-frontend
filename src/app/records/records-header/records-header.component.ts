import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-records-header',
	templateUrl: './records-header.component.html',
	styleUrls: ['./records-header.component.scss']
})
export class RecordsHeaderComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	logout() {
		this.authService.logout();
	}
}
