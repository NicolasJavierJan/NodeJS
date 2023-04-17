import { Router } from "express";
import bcrypt from "bcrypt";

const router = Router();

// TODO:
// Replace this with however we do the Database:
const users = [];

// Sign Up
router.post("/auth/sign-up", async (req, res) => {
    // TODO:
    // Add a check for if user already exists =)
    // Easier when a Database is involved.
  
    // Create new user object, hash the password.
    const newUser = {
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 8),
      email: req.body.email
    }
  
    // Save the new user.
    users.push(newUser);
  
    res.send("User was created");
  });
  
  // Login
  router.post("/auth/login", async (req, res) => {
    // Search for user:
    const foundUser = users.find(user => user.username === req.body.username);
    if (foundUser) {
      const passwordCheck = await bcrypt.compare(req.body.password, foundUser.password);
      if (passwordCheck){
        req.session.name = foundUser.username;
        res.send(`Hello again, ${req.session.name}`);
      } else {
        //TODO:
        // Don't forget to change this so it looks like the other one, 
        // no need to give clues to people that they found an existing user!
        res.send("Wrong Password!");
      }
    } else {
      res.send("I don't know you");
    }
  });
  
  // Log out
  router.get("/auth/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
  });

export default router;