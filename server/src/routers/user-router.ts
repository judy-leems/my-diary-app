import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { userController } from '../controllers';

const userRouter: Router = Router();

userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signUp);

export { userRouter };
