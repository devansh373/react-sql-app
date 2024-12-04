import express from "express";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

// import postRouter from "./routes/posts";
const app = express();
app.use(express.json());
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.listen(5000, () => {
  console.log("Connected!");
});
