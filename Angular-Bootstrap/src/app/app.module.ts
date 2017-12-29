import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AlertsComponent } from './business-logic/_directives/alerts/alerts.component';
import { AuthGuardService } from './business-logic/_guards/auth-guard.service';
import { AuthenticationService } from './business-logic/_services/authentication.service';
import { AlertsService } from './business-logic/_services/alerts.service';
import { UserService } from './business-logic/_services/user.service';
import { fakeBackendProvider } from './business-logic/_helpers/fake-backend.service';
import { JwtInterceptorService } from './business-logic/_helpers/jwt-interceptor.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    AlertsService,
    UserService,
    fakeBackendProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
