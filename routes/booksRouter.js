import { Router } from 'express';
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../controllers/books.js';
import { booksLogger } from '../middlewares/booksLogger.js';
import { timeLogger } from '../middlewares/timeLogger.js';

const booksRouter = Router();
// booksRouter.use(booksLogger);

booksRouter
  .route('/')
  .get(timeLogger, booksLogger, getAllBooks)
  .post(addNewBook);
booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

export default booksRouter;
