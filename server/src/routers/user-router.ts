import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { userController } from '../controllers';

const userRouter: Router = Router();

userRouter.post('/auth/login', userController.login);
userRouter.post('/auth/signup', userController.signUp);

export { userRouter };
