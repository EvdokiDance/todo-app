import dotenv from "dotenv";
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import mainRouter from './routes';

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors())
app.use(express.json())
app.use(mainRouter);


app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Welcome to todo-backend!' });
});

app.listen(port, () => console.log(`Server started on port ${port}`));

