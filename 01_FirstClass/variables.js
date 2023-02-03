//console.log("Hello World");
//let me = {};
const me = {};
// Always use const if you can get away with it. Use let if you have to. Never use var.
// By declaring something as const, it will catch errors that might arise later.
// There are never constants in programming. 
me.name = "Nico";
// We can add key-value pairs to the object. 
// JSON stands for JS Object Notation. You need quotes in the key and value.
// Const is about declaration. You cannot reassign. Have to assign a value on declaration. 
const hobbies = ["Reading"];
hobbies.push("Sleeping");
me.hobbies = hobbies;
console.log(me);

// Single quotes vs Double quotes (also backticks!):
const hobbyOne = "Reading";
const hobbyTwo = "Swimming";
const hobbyThree = `Playing videogames like Persona ${2+3}`;

// They can be used interchangeably, if you need a quote inside a String you can use " ' ' " or ' "" ' for example.