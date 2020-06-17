import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _jwtHelperService = new JwtHelperService()
  
  constructor(private http:HttpClient) { }
  
  private readonly baseUrl = "http://localhost:3000/"

  public is_authenticated(): boolean {
    let jwt = this.getToken()
    console.log(`JWT: ${jwt}`)
    return !this._jwtHelperService.isTokenExpired(jwt);
  }

  public getToken(): string {
    return localStorage.getItem('jwt');
  }
  
  public getUser(){
    
  }

}