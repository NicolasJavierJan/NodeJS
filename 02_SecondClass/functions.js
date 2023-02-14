// Possible because of hoisting. You can call functions that have not been declared.

console.log(random(0, 10));

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// Anonymous function.
// Function without a name.
const randomAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

console.log(randomAnonymousFunction(0, 100));

// Arrow function. 
const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

console.log(randomArrowFunction(0, 1));

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

// Functions in JS are first class citizens, we can pass functions as parameters.
// Callback function (function passed as an argument)
function genericActionPerformer(genericAction, genericName) {

    return genericAction(genericName);
}

const substract = (name) => `${name} is substracting.`;
const walk = (name) => `${name} is walking.`

// Make it console.log Tobias is Substracting.

console.log(genericActionPerformer(substract, "Tobias"));
console.log(genericActionPerformer(walk, "Nicolas"));
console.log(genericActionPerformer((name) => `${name} cannot read`, "Andrea"))