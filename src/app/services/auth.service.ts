import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../login/user';


const url = '/api/login';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private httpClient: HttpClient, private router: Router) { }

	login(user: User): Observable<any> {
		return this.httpClient.post<any>(url, user);
	}

	logout() {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('unit');
		sessionStorage.removeItem('username');
		
		this.router.navigate(['/login']);
	}

	loggedIn(): boolean {
		return !!sessionStorage.getItem('token');
	}
}
