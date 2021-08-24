
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ToDoNote } from 'src/app/to-do-note';
import { User } from 'src/app/user';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  id: string;
  curUser!: User;

  constructor(private userService: UserServiceService) { 
    this.id = 'a';
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(data => {
      this.curUser = data;
    });

    console.log(this.curUser);
  }

  incrementID(): void {
    let letter = 'a';
    this.id = this.id + letter;

    console.log(this.curUser);
  }

  getId(): string {

    this.incrementID();
    return this.id;
  }

  getCurId(): string {
    return this.id;
  }

  setCompleted(id: string, note: ToDoNote): void {
    note.completed = !note.completed;
    (document.getElementById(id) as HTMLInputElement).checked = note.completed;
  }
}
