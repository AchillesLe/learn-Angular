import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface my_data{
  message:string,
  success:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getSomeData(){
    return this.http.get<my_data>('/api/database.php');
  }
}
