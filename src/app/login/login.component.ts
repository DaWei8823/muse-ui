import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly googleAuthLink = "http://localhost:3000/auth/google";
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      { 
        let jwt = params.get('jwt');
        console.log('reading jwt')
        console.log(jwt)
        localStorage.setItem("jwt", jwt)
      });
    
    
  }

}
