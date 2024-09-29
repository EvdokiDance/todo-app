import { Status, Todo } from "@prisma/client";
import { prisma } from "../prisma/prisma-client";
import type { TodoDTO } from "./todo-dto";



class TodoService {
    async createTodo(description: string): Promise<Todo> {
       const todo = await prisma.todo.create({
            data: {
                description
            }
        })
        return todo;
    }
    
    async getTodos(): Promise<TodoDTO[]> {
        const todos = await prisma.todo.findMany();
        const todoDTOs : TodoDTO[] = todos.map((todo) => {
            return {
                id: todo.id,
                description: todo.description,
                status: todo.status === 'DONE' ? 'completed' : 'active',
                dateCreated: todo.createdAt.toISOString()
            }
        });
        return todoDTOs;
    }


    async deleteTodo(id: string): Promise<Todo> {
        const deletedTodo = await prisma.todo.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedTodo;
    }
    async updateTodo(id: string, description?: string, status?: Status): Promise<Todo> {
        
    
        const updatedTodo = await prisma.todo.update({
            where: {
                id: Number(id)
            },
            data: {
                description,
                status,
            }
        })
        return updatedTodo;
    }

}



export default new TodoService;