import express from 'express';
import pool from './db/server.js';
import booksRouter from './routes/booksRouter.js';
import userRouter from './routes/userRouter.js';
import { getOnlyMiddleware } from './middlewares/getOnlyMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());
// app.use(getOnlyMiddleware);
app.use(express.static('public'));

// Routes
app.use('/books', booksRouter);
app.use('/user', userRouter);
app.post('/something', getOnlyMiddleware, (req, res) => res.send('Hello'));

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
