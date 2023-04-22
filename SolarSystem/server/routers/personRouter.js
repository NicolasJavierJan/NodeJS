import { Router } from "express";
// Destructure Router from Express.
const router = Router();
import db from "../databases/connection.js"

router.post("/people", async (req, res) => {
    // Hardcoded. I could do it with the BODY.
    const person = await db.all("INSERT INTO people (name, planet_id) VALUES ('Martian Nico', 4);");
    // const result = await db.run("INSERT INTO people (name, planet_id) VALUES ('Martian Nico', 4);");
    const all = await db.all("SELECT * FROM people;");
    // VALUES (?, 3), [req.body.name];
    res.send({ all });
});

export default router;