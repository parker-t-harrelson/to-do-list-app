
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ToDoNote } from 'src/app/to-do-note';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  id: string;
  category!: Category[];

  constructor(private userService: UserServiceService) { 
    this.id = 'a';
  }

  ngOnInit(): void {
    this.userService.findCategorys().subscribe(data => {
      this.category = data;
    });
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
