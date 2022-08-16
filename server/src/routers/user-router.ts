import { Router } from "express";

const userRouter: Router = Router();

userRouter.post("/users/login", (req, res) => {
  res.send("user login post");
});

export { userRouter };
