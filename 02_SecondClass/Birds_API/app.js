const express = require("express");
const app = express();

const birds = []
const raven = {
    id: 1,
    name: "Crow",
    color: "Black",
    scientificName: "Corvus"
}
const pigeon = {
    id: 2,
    name: "Pigeon",
    color: "grey",
    scientificName: "Columbidae"
}
const swan = {
    id: 3,
    name: "Swan",
    color: "White",
    scientificName: "Cygnus"
}

birds.push(raven, pigeon, swan)

// Get request that returns all the birds:
app.get("/birds", (req, res) => {
    res.send(birds)
})

// Implementation after feedback:
// Feedback was:
// "You should use :id, then you don't have to include the added query string and just use the endpoint as originally intended"
// birds/1, birds/23, etc.

app.get("/birds/:id", (req, res) => {
    foundBird = birds.find(bird => bird.id == req.params.id)
    if (foundBird) {
        res.send(foundBird)
    } else {
        res.send({});
    }
    
})

// This was my implementation.
/*
// Get Bird by ID
app.get("/birds/id", (req, res) => {
    res.send(birds.find(bird => bird.id == req.query.id))
});

// Get Bird by Name (originally case-sensitive)
app.get("/birds/name", (req, res) => {
    res.send(birds.find(bird => bird.name.toLowerCase() == req.query.name.toLowerCase()))
})

// Get Bird by Scientific Name
app.get("/birds/scientificName", (req, res) => {
    res.send(birds.find(bird => bird.scientificName.toLowerCase() == req.query.scientificName.toLowerCase()))
})

// Not really sure if best implementation.
// Path looks something like: localhost/birds/id?id=1 which leads to some redundancy.
// Could not make it work with only /birds/?id=1, because app.get("birds") and app.get("birds/") is the same for Express.
// Every get request we did in class had a different name (bat, bottle, etc) so I don't exactly know how to implement birds/{id} and birds/{name}

*/

// My solution:
/*
// Post Method:

app.post("/birds/:name&:color&:scientificName", (req, res) => {
    birds.push({
        id: birds.length + 1,
        name: req.params.name,
        color: req.params.color,
        scintificName: req.params.scientificName
    })
    res.send(birds);
})

// POST Methods. Not sure if best implementation, as it can store empty strings if not enough parameters are being sent.
// Not sure what is the best way to do it.

app.post("/birds/name/:name", (req, res) => {  
    birds.push({
        id: birds.length + 1,
        name: req.params.name,
        color: "",
        scientificName: ""
    })
    res.send(birds);
})

app.post("/birds/name/:name/color/:color", (req, res) => {  
    birds.push({
        id: birds.length + 1,
        name: req.params.name,
        color: req.params.color,
        scientificName: ""
    })
    res.send(birds);
})

app.post("/birds/name/:name/color/:color/scientificName/:scientificName", (req, res) => {  
    birds.push({
        id: birds.length + 1,
        name: req.params.name,
        color: req.params.color,
        scientificName: req.params.scientificName
    })
    res.send(birds);
})

*/

// Class solution: Using the body. For that, we need to allow JSON Parsing.
// For the ID, we should never use the array length to to get ID numbers.
app.use(express.json());

app.post("/birds", (req, res) => {
    const birdToCreate = req.body;
    birdToCreate.id = ++currentID;
    birds.push(birdToCreate);
    res.send({birds});
})

let currentID = 1;

// PUT Method:

app.put("/birds/:id/:name&:color&:scientificName", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        foundBird.name = req.params.name;
        foundBird.color = req.params.color;
        foundBird.scientificName = req.params.scientificName;

        res.send(foundBird);
    } else {
        res.send({});
    }
})

/*
// PATCH Methods: My Solution
app.patch("/birds/:id/name/:name", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        foundBird.name = req.params.name;

        res.send(foundBird);
    } else {
        res.send({});
    }
})

app.patch("/birds/:id/color/:color", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        foundBird.color = req.params.color;

        res.send(foundBird);
    } else {
        res.send({});
    }
})

app.patch("/birds/:id/scientificName/:scientificName", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        foundBird.scientificName = req.params.scientificName;

        res.send(foundBird);
    } else {
        res.send({});
    }
})
*/

// Patch Methods: Class
app.patch("/birds/:id", (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (!foundIndex === -1) {
        res.status(404).send({message: `no bird found with id ${req.params.id}`})
    } else {
        // This can change the ID!
        //foundBird = {...foundBird, ...req.params}
        const foundBird = birds[foundIndex];
        const birdToCreate = {...foundBird, ...req.body, id: foundBird.id}
        birds[foundIndex] = birdToCreate;
        res.send({birdToCreate});
    }
})

// Delete (My Solution):
/*
app.delete("/birds/:id", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        birds.splice(foundBird, 1); 
        res.send(birds);
    } else {
        res.send({});
    }
})
*/

// Delete: Class Solution
app.delete("/birds/:id", (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (foundIndex === -1) {
        res.status(404).send({ data: foundIndex, message: `no birds found with id ${req.params.id}`})
    } else {
        const deletedBird = birds.splice(foundIndex, 1)[0];
        res.send({ deletedBird });
    }
})

app.listen(8080);