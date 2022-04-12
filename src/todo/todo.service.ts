/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
    todos: Todo[]=[];

    getTodos(): Todo[] {
        return this.todos;
    }
    
    addTodo(newTodo:AddTodoDto) : Todo {

        const {name, description} = newTodo;
        let id;

        if(this.todos.length){
             id = this.todos[this.todos.length-1].id + 1;
        }else{
             id = 1;
        }

        const todo ={
            id,
            name,
            description,
            creatAt: new Date()
        };
        this.todos.push(todo);
        return todo;
    }

    getTodoById(id: number):Todo{
        console.log('Get Todo by id');
        const todo = this.todos.find((actualTodo:Todo) => actualTodo.id === id);
        if(todo){
            return todo
        }
       throw new NotFoundException(`Not Todo with id : ${id} `);
    }

    deleteTodo(id: number){
         // find obj by id in the todos array and
    const index= this.todos.findIndex((todo:Todo) => todo.id === id);
    // splice to delete it
    if(index >= 0)
    {
        this.todos.splice(index, 1);
    }else{
        throw new NotFoundException('TODO with id= '+id+' not found')
    }
    return {
        message: 'TODO with id='+id+ "successfully deleted",
        count:1
        };
    }

    updateTodo(id: number,todo:Partial<Todo>){
        const targetTodo = this.getTodoById(id);
        targetTodo.description = todo.description? todo.description : targetTodo.description;
        targetTodo.name = todo.name? todo.name : targetTodo.name;

        return targetTodo;
    }
}
