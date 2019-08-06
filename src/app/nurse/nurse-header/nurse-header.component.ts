import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-nurse-header',
	templateUrl: './nurse-header.component.html',
	styleUrls: ['./nurse-header.component.scss']
})
export class NurseHeaderComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	logout() {
		this.authService.logout();
	}
}
