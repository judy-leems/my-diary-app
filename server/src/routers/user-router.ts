import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { userController } from '../controllers';

const userRouter: Router = Router();

userRouter.post('/auth/login', userController.login);

export { userRouter };
