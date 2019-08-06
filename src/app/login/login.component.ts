import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user = new User();
	response: any;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	logUserIn() {
		this.authService
		.login(this.user)
		.subscribe(
			(res: any) => {
				sessionStorage.setItem('token', res.token)
				sessionStorage.setItem('unit', res.unit)
				sessionStorage.setItem('username', res.username)
				
				this.router.navigate(['/'+res.unit.toString()]);
				this.user = new User();
			},
			err => {
				console.error(err)
				this.response = "Invalid username and/or password."
			});
	}

}
