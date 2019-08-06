import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private authService: AuthService, private router: Router) { }

	loggedIn(): boolean{
		return this.authService.loggedIn();
	}

	logout() {
		this.authService.logout();
	}

	goHome() {
		this.router.navigate(['/'+sessionStorage.getItem('unit').toString()]);
	}
}
