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
// Path looks something like: localhost/birds/id?id=1, which leads to some redundancy.
// Could not make it work with only /birds/?id=1, because app.get("birds") and app.get("birds/") is the same for Express.
// Every get request we did in class had a different name (bat, bottle, etc) so I don't exactly know how to implement birds/{id} and birds/{name}

app.listen(8080);