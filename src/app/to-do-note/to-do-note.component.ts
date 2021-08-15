import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  toDoNote = TASKS;

  constructor() { }

  ngOnInit(): void {
  }
}
