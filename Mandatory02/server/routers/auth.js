import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../databases/connection.js"

const router = Router();

// Sign Up
router.post("/auth/sign-up", async (req, res) => {
    const user = await db.all("SELECT * FROM users WHERE USERNAME = ?", [req.body.username]);
    if (user.length !== 0){
      res.status(400).send();
    } else {
      const password = await bcrypt.hash(req.body.password, 8);
      await db.all("INSERT INTO users (username, email, password, user_type) VALUES (?, ?, ?, 2)", [req.body.username, req.body.email, password]);
      res.status(200).send();
    }
  });
  
  // Login
  router.post("/auth/login", async (req, res) => {
    // Search for user:
    const user = await db.all("SELECT * FROM users WHERE username = ?", [req.body.username]);
    if (user.length !== 0){
      const passwordCheck = await bcrypt.compare(req.body.password, user[0].password);
      if (passwordCheck){
        req.session.name = user[0].username;
        res.status(200).send(`Welcome back, ${req.session.name}`);
      } else {
        // Password does not match:
        res.status(401).send();
      }
    } else {
      // User not found:
      res.status(401).send();
    }
  });
  
  // Log out
  router.get("/auth/logout", (req, res) => {
    req.session.destroy();
    res.status(200).send();
  });

export default router;