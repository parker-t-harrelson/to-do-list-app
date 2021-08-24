import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { ToDoNote } from '../to-do-note';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;
  private taskUrl: string;
  private categoryUrl: string;
  private getUserUrl: string;

  constructor(private http: HttpClient) { 
    this.userUrl = 'http://localhost:8080/users';
    this.taskUrl = 'http://localhost:8080/tasks';
    this.categoryUrl = "http://localhost:8080/categories";
    this.getUserUrl = "http://localhost:8080/user-info";
  }

  public findTasks(): Observable<ToDoNote[]> {
    return this.http.get<ToDoNote[]>(this.taskUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public findCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  public getUserInfo(): Observable<User> {
    return this.http.get<User>(this.getUserUrl);
  }
}


