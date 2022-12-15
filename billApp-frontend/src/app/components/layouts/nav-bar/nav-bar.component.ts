import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/help/guards/security.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public securityService: SecurityService) {}

  ngOnInit(): void {}

  async login() {
    await this.securityService.kcService.login({
      redirectUri: window.location.origin,
    });
  }

  logout() {
    this.securityService.kcService.logout(window.location.origin);
  }
}
