import express from "express";
import { addPost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/test", addPost);
export default postRouter;
