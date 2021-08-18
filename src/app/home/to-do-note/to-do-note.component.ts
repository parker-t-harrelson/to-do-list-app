
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ToDoNote } from 'src/app/to-do-note';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  toDoNote!: ToDoNote[];
  id: string;

  constructor(private userService: UserServiceService) { 
    this.id = 'a';
  }

  ngOnInit(): void {
    this.userService.findTasks().subscribe(data => {
      this.toDoNote = data;
    });
  }

  incrementID(): void {
    let letter = 'a';
    this.id = this.id + letter;

    console.log(this.toDoNote);
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
