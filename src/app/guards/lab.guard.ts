import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LabGuard implements CanActivate {

	canActivate(): boolean {

		const unit = sessionStorage.getItem('unit');

		if (unit !== null && (unit == 'lab' || unit == 'admin')) {
			return true;
		}
		else {
			return false;
		}
	}
}