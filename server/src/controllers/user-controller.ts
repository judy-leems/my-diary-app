import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // req (request) 에서 데이터 가져오기
      const email: string = req.body.email;
      const password: string = req.body.password;

      // 위 데이터가 db에 있는지 확인하고,
      // db 있을 시 로그인 성공 및, 토큰 받아오기
      const userToken = await userService.getUserToken({ email, password });

      res
        .cookie('token', userToken, {
          httpOnly: true,
          signed: true,
        })
        .status(200)
        .json(userToken);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };