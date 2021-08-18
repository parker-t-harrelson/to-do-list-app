import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { ToDoNote } from '../to-do-note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;
  private loginUrl: string;
  private taskUrl: string;

  constructor(private http: HttpClient) { 
    this.userUrl = 'http://localhost:8080/users';
    this.loginUrl = 'http://localhost:8080/login';
    this.taskUrl = 'http://localhost:8080/tasks'
  }

  public findTasks(): Observable<ToDoNote[]> {
    return this.http.get<ToDoNote[]>(this.taskUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  
}


