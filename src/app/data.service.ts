import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }
    getUsers(){
        return  this.http.get('http://jsonplaceholder.typicode.com/users');
    }
    getUser(userId){
        return  this.http.get('http://jsonplaceholder.typicode.com/users/'+userId);
    }
    getPosts(){
        return  this.http.get('http://jsonplaceholder.typicode.com/posts');
    }
    getWeather(){
        return  this.http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1'  );
    }
}
