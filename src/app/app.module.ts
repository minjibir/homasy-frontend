import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppHttpInterceptorService } from './http-interceptor.service';
//////////
//////////
// Nawa //
//////////
//////////
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EntranceModule } from './entrance/entrance.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { LabModule } from './lab/lab.module';
import { NurseModule } from './nurse/nurse.module';
import { ConsultationModule } from './consultation/consultation.module';
import { RecordsModule } from './records/records.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EntranceModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Csrf-Token',
      headerName: 'Csrf-Token',
    }),
    LabModule,
    PharmacyModule,
    ConsultationModule,
    RecordsModule,
    NurseModule
  ],
  providers: [
  AuthGuard,
  AuthService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
