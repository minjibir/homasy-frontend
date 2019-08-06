import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';
import { EntranceComponent } from './entrance.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    EntranceRoutingModule,
    RouterModule
  ],
  declarations: [EntranceComponent]
})
export class EntranceModule { }
