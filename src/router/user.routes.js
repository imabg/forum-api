import { Router } from 'express';
import { body } from 'express-validator';
import { signUp } from '../api/controllers/user.controller.js';

const userRouter = Router();

userRouter.post(
  '/us',
  body('name').isString().withMessage("Name is required"),
  body('email').isEmail().withMessage("Email is required"),
  signUp
);

export default userRouter;
