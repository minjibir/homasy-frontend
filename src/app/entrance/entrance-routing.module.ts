import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './entrance.component';

const routes: Routes = [
  {path: '', component: EntranceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranceRoutingModule { }
