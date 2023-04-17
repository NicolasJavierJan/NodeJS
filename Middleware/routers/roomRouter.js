import {Router} from "express";
const router = Router();

router.get("/room", (req, res, next) => {
    console.log("Welcome to Room 1");
    next();
    //res.send({ message: "I am in Room 1"})
})

router.get("/room", (req, res, next) => {
    console.log("Welcome to Room 2");
    res.send({ message: "I am in Room 2"})
})

export default router;