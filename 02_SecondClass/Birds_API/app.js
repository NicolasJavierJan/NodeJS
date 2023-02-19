const app = require("express")();

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

/*
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

// PATCH Methods

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

app.delete("/birds/:id", (req, res) => {
    foundBird = birds.find(bird => bird.id === Number(req.params.id));
    if (foundBird){
        birds.splice(foundBird, 1); 
        res.send(birds);
    } else {
        res.send({});
    }
})

app.listen(8080);