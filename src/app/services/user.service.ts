import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  createUser(user : User){
    return this.http.post<User>(`http://localhost:8080/users`,user);
  }
}
