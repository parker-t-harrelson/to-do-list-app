import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNoteComponent } from './to-do-note.component';

describe('ToDoNoteComponent', () => {
  let component: ToDoNoteComponent;
  let fixture: ComponentFixture<ToDoNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
