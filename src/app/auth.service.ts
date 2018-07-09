import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface data_login{
  success:string,
  secret:string
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  IsloggedInStatus = JSON.parse( localStorage.getItem('loggedIn')|| 'false' );
  setLoggedStatus(value:boolean){
    this.IsloggedInStatus = value;
    localStorage.setItem('loggedIn','true')
  }
  get isLoggedIn(){
    return JSON.parse( localStorage.getItem('loggedIn')|| this.IsloggedInStatus.toString() );
  }
  constructor(private http: HttpClient) { 

  }
  getUserDetails(username,password){
    const data = {username:username,password:password};
    return this.http.post<data_login>('api/auth.php',data,{responseType: 'json'} );
  }
}
