import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Muse';
  

  constructor(private readonly authService:AuthService, private route: ActivatedRoute, private router: Router,private dialog:MatDialog){}

  ngOnInit(): void {
       
    this.route.queryParamMap
    .subscribe(params =>
    { 
      let jwt = params.get('jwt');

      if(jwt){
        console.log('navigating');
        localStorage.setItem("jwt", jwt);
        let jwt2  = localStorage.getItem("jwt");
        console.log(`jwt just set ${jwt2}`);
        this.router.navigateByUrl('prompts');
      }
      else{
        this.checkAuth();
      }
      console.log('done');
  }, error => console.log(error), () => console.log("complete"));

}

  // handleParamMap(params:ParamMap){

  // }

  checkAuth(){
    if(!this.authService.is_authenticated()){
      this.dialog.open(LoginComponent);
    }
  }

  
}
