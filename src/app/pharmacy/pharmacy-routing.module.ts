import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
