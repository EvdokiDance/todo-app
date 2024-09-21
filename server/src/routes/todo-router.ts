import express from 'express';
import TodoController from '../controllers/todo-controller';

const router = express.Router();

router.post('/create-todo', TodoController.createTodo);
router.get('/get-todos', TodoController.getAllTodos);
router.delete('/delete-todo/:id', TodoController.deleteTodo);
router.patch('/update-todo/:id', TodoController.updateTodo);

export default router;