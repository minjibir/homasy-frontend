import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmacyHeaderComponent } from './pharmacy-header/pharmacy-header.component';
import { PharmacySideNavComponent } from './pharmacy-side-nav/pharmacy-side-nav.component';
import { PharmacyMainComponent } from './pharmacy-main/pharmacy-main.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { PrescriptionsRecordComponent } from './prescriptions-record/prescriptions-record.component';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { DrugListComponent } from './drug-list/drug-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    FormsModule
  ],
  declarations: [
    PharmacyComponent,
    PharmacyHeaderComponent,
    PharmacySideNavComponent,
    PharmacyMainComponent,
    PrescriptionsComponent,
    PrescriptionsRecordComponent,
    AddDrugComponent,
    DrugListComponent,
    PrescriptionsRecordComponent
  ]
})
export class PharmacyModule { }
