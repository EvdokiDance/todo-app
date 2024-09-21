import express from 'express';

import TodoRouter from './todo-router';


const mainRouter = express.Router();



mainRouter.use(TodoRouter);



export default mainRouter;



