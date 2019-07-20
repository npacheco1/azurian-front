import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }
  getUsers() {
    return this.http.get('http://127.0.0.1:8080/api/users/');
    //return this.http.get('http://127.0.0.1:8080/api/users/');

  }
}
