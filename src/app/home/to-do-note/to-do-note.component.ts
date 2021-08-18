
import { Component, OnInit } from '@angular/core';
import { ToDoNote } from 'src/app/to-do-note';
import { TASKS } from '../../tasks';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  toDoNote = TASKS;
  id: string;

  constructor() { 
    this.id = 'a';
  }

  ngOnInit(): void {
  }

  incrementID(): void {
    let letter = 'a';
    this.id = this.id + letter;
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
