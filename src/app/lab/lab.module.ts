import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab/lab.component';
import { LabHeaderComponent } from './lab-header/lab-header.component';
import { LabSideNavComponent } from './lab-side-nav/lab-side-nav.component';
import { TestResultEntryComponent } from './test-result-entry/test-result-entry.component';
import { TestResultComponent } from './test-result/test-result.component';
import { LabMainComponent } from './lab-main/lab-main.component';
import { TestRequestComponent } from './test-request/test-request.component';
import { FormsModule } from '@angular/forms';
import { TestResultViewComponent } from './test-result-view/test-result-view.component';

@NgModule({
  imports: [
    CommonModule,
    LabRoutingModule,
    FormsModule
  ],
  declarations: [LabComponent, LabHeaderComponent, LabSideNavComponent, TestResultEntryComponent, TestResultComponent, LabMainComponent, TestRequestComponent, TestRequestComponent, TestResultViewComponent]
})
export class LabModule { }
