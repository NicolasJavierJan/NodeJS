import { Router } from "express";
const router = Router();

router.get("/auth/logout", (req, res) => {
    res.send({});
})

router.post("/aut/login", (req, res) => {
    res.send({});
})

export default router;