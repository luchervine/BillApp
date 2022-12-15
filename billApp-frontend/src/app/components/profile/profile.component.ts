import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/help/guards/security.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //objets
  user: any;

  //variables
  id: number = Number(localStorage.getItem('id_user'));

  constructor(private route: Router, public securityService: SecurityService) {}

  ngOnInit() {}
}
