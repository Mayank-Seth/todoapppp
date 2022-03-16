import { Component, OnInit } from '@angular/core';
 import { Guid } from 'guid-typescript';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit , todo {
 
  constructor(
    public id: Guid,
    public title: string,
    public isComplete: boolean

  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  todos: todo[];
}
