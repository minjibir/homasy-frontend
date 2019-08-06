import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpEvent
} from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token = sessionStorage.getItem('token');

		if(token) {
			const inteceptedRequest = req.clone({
				headers: req.headers.set('Authorization', token)
			});

			return next.handle(inteceptedRequest);
		}
		else {
			return next.handle(req);
		}
	}

}
