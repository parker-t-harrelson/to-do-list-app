import { Category } from "./category";

export class User {

    id!: string;
    username!: string;
    email!: string;
    password!: string;
    category!: Category[];
}
