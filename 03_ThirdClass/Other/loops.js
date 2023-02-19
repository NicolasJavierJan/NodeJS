const rocks = [
    { name: "Led Zeppelin", age: 50 },
    { name: "Dwayne Johnson", age: 47 },
    { name: "Neptune", age: 100_000 }
];

// Make all the rocks one year older and save it to rocksAgedOneYear;
// Loop Methods: map, filter, find, reduce, sort, foreach.
// Map: maps one to one, returns a new list.

// It does not map the data structure.
//const rocksAgedOneYear = rocks.map(rock => rock.age++)

/* Better implementation, but it makes a bug where it mutates the original rock array.
const rocksAgedOneYear = rocks.map(rock => {
    rock.age++;
    return rock;
})
*/

// Best impementation
const rocksAgedOneYear = rocks.map(rock => {
    // Spread operator ...rock will maintain all the parameters that are not being changed without the need to type.
    return {name: rock.name, age: rock.age + 1};
});

console.log(rocksAgedOneYear);

// Return only the rocks that have even ages:

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0)


console.log(evenAgedRocks);