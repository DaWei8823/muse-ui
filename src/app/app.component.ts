import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Muse';
  

  constructor(private readonly authService:AuthService, private dialog:MatDialog){}

  ngOnInit(): void {

    this.authService.is_authenticated().subscribe(null, error => this.dialog.open(LoginComponent));
    
  }

  
}
