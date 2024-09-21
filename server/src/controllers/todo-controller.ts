import { Request, Response } from "express";

import TodoService from '../services/todo-service';

class TodoController {
    async createTodo(req: Request, res: Response) {
        try {
            const { description } = req.body;
            console.log(description);
            const todo = await TodoService.createTodo(description);
            res.status(201).json(todo);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(400).json({message: e.message});
            }
            res.status(500).json({message: 'Unknown error'});
        }
    }

    async getAllTodos(req: Request, res: Response) {
        try {
            const todos = await TodoService.getTodos();
            res.status(200).json(todos);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(400).json({message: e.message});
            }
            res.status(500).json({message: 'Unknown error'});
        }
    }

    async deleteTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            console.log(id);
            
            const deletedTodo = await TodoService.deleteTodo(id);
            res.status(200).json(deletedTodo);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(400).json({message: e.message});
            }
            res.status(500).json({message: 'Unknown error'});
        }
    }
    async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { description, status } = req.body;
            
            const updatedTodo = await TodoService.updateTodo(id, description, status);
            res.status(200).json(updatedTodo);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(400).json({message: e.message});
            }
            res.status(500).json({message: 'Unknown error'});
        }
    }
}

export default new TodoController;