import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitGuard implements CanActivate {
  
  constructor() { }

  canActivate(): boolean {

    const unit = sessionStorage.getItem('unit');
    
    if (unit !== null && unit !== '') {
      return true;
    }
    else {
      return false;
    }
  }
}
