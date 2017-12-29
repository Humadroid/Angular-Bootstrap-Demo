import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../_services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  message: any;
  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.alertsService.getMessage().subscribe(message => { this.message = message; });
  }

}
