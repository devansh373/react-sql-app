import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// const bcrypt = require("bcryptjs");
export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email=? AND username=?";
  const { email, username, password } = req.body;

  db.query(q, [email, username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const q2 = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [username, email, hash];
    db.query(q2, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("done!");
    });
  });
};
export const login = (req, res) => {
  // CHECK User
  const q = "SELECT * FROM users WHERE username=?";
  const { username, User } = req.body;

  db.query(q, [username, password], (err, data) => {
    if (err) return res.json(err);
    if (data.length == 0) return res.status(404).json("User not found");
    // CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
    if (!isPasswordCorrect) return res.status(400).json("Wrong password");
  });
};
export const logout = () => {};
