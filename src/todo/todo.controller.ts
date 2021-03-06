/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Req, Res, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { UpperAndFusionPipe } from 'src/pipes/upper-and-fusion.pipe';
import { AddTodoDto } from './dto/add-todo.dto';
import { GetPaginatedTodoDto } from './dto/get-paginated-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    

    constructor(private todoService: TodoService){}  //DI

//   @Get()
//   getTodos(@Req() request: Request, @Res() response: Response) {
//     console.log(request); // to access to the request object
//     console.log(response); // to access to the response object
//     console.log('Recupere list of todos');
//     return 'Liste of TODOS';
//   }

  @Get()
  getTodos(@Query() mesQParams : GetPaginatedTodoDto) {
        console.log(mesQParams instanceof GetPaginatedTodoDto);
    return this.todoService.getTodos();
  }

  //   @Post()
  //   addTodo(@Body('id') id: string, @Body('name') name: string) {   // => to get specific fields
  //     console.log(id);
  //     console.log(name);
  //     console.log('Add an item  of TODO');
  //     return 'Add TODO ';
  //   
  
  
  //Get a specific ToDo with @Param()
  @Get('/:id')
  getTodoById(@Param('id', ParseIntPipe) id ){
    return this.todoService.getTodoById(id);
  }

  @Post()
  addTodo(@Body() newToDo: AddTodoDto): Todo {   // => to get specific fields
    console.log(newToDo);
    return this.todoService.addTodo(newToDo);
  }


  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id) {
   return this.todoService.deleteTodo(id);
  }


  @Put(':id')
  putTodo(
      @Param('id',ParseIntPipe) id, 
      @Body() todo : Partial<AddTodoDto>
      ) {
    return this.todoService.updateTodo(id, todo);
  }

  @Post('pipe')
  testPipe(@Body(UpperAndFusionPipe) data) {
    return data;
  }
}
