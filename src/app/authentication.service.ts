import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_AUTH_LINK="https://immense-citadel-91115.herokuapp.com/api/Users/login"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Http:HttpClient) { }

  isAuthenticated(){
   return !!localStorage.getItem('token');
  }
  login(credentials){
     return this.Http.post<any>(API_AUTH_LINK,credentials)
   }
}
