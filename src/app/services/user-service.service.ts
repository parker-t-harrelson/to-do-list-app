import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;
  private loginUrl: string;

  constructor(private http: HttpClient) { 
    this.userUrl = 'http://localhost:8080/users';
    this.loginUrl = 'http://localhost:8080/login';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  
}


