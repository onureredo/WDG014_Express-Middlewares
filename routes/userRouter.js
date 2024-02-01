import { Router } from 'express';
import {
  getUser,
  userDelete,
  userPost,
  userUpdate,
} from '../controllers/user.js';

const userRouter = Router();

userRouter.get('/', getUser);
userRouter.post('/', userPost);
userRouter.put('/', userUpdate);
userRouter.delete('/', userDelete);

export default userRouter;
