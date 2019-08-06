import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { TestResultEntryComponent } from './test-result-entry/test-result-entry.component';
import { TestResultComponent } from './test-result/test-result.component';
import { LabMainComponent } from './lab-main/lab-main.component';

const routes: Routes = [
  // {
  //   path: 'lab',
  //   component: LabComponent,
  //   children: [
  //     {path: '', component: LabMainComponent},
  //     {path: 'result', component: TestResultComponent},
  //     {path: 'resultentry', component: TestResultEntryComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
