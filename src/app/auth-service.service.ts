import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {  }
  
  private readonly baseUrl = "http://localhost:3000/"

  is_authenticated(){
    return this.http.get<boolean>(this.baseUrl + "auth/isauthenticated");
      
  }
  

}