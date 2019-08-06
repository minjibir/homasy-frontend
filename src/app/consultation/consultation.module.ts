import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './consultation/consultation.component';
import { FormsModule } from '@angular/forms';
import { ConsultationMainComponent } from './consultation-main/consultation-main.component';
import { ConsultationHeaderComponent } from './consultation-header/consultation-header.component';
import { ConsultationSideNavComponent } from './consultation-side-nav/consultation-side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ConsultationComponent,
    ConsultationMainComponent,
    ConsultationHeaderComponent,
    ConsultationSideNavComponent
  ]
})
export class ConsultationModule { }
