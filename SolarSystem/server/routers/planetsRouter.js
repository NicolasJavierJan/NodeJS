import { Router } from "express";
// Destructure Router from Express.
const router = Router();
import db from "../databases/connection.js"

router.get("/planets", async (req, res) => {
    const planets = await db.all("SELECT * FROM planets;");

    res.send({ data: planets });
})

export default router;