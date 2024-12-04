import express from "express";
import { addPost } from "../controllers/postController.js";

const userRouter = express.Router();

userRouter.get("/test", addPost);
export default userRouter;
