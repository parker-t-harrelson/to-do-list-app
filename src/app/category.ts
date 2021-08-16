import { ToDoNote } from "./to-do-note";

export interface Category {
    title: string;
    tasks: ToDoNote[];
}