import { Component, OnInit, Input } from '@angular/core';
import { TodoData } from "../../models/todo-data";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() Todo: TodoData;

  newTodoLabel: string;
  todos: TodoData[] = [];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }

  addTodo(newTodoLabel: string) {
    var newTodo = {
      id: this.todos.length + 1,
      title: newTodoLabel,
      completed: false
    };

    if(newTodo.title != "") {
      this.todos.push(newTodo);
      this.newTodoLabel = "";
      this.increment();
    }

    else {
      alert("Input box is blank! Please type something to do!");
    }
  }

  removeTodo(newTodoLabel: any) {
    var check: string = prompt("Delete this item? Y for yes, N for no!");

    if(check === "Y" || check === "y")
    {
      const index: number = this.todos.indexOf(newTodoLabel);

      if (index !== -1) {
          this.todos.splice(index, 1);
          this.decrement();
      }
    }
    else if(check != "Y" && check != "N" && check != 'n')
    {
      alert("Input is invalid, please type Y for yes, N for no!");
    }
  }

  removeCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
  
  removeAll() {
    this.todos = this.todos.filter(todo => !todo.completed && todo.completed);
    this.counter = 0;
  }

  isChecked(completed: boolean) {
    if(!completed) {
      this.increment();
    }
    else {
      this.decrement();
    }
  }
}