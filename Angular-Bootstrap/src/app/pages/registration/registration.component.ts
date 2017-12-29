import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../business-logic/_services/user.service';
import { AlertsService } from '../../business-logic/_services/alerts.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertsService: AlertsService
  ) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        this.alertsService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertsService.error(error);
        this.loading = false;
      });
  }
}
