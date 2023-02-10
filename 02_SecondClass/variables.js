"use strict"
// Strict mode catches problems with the code

// Four ways to declare variables

// NEVER EVER DO THIS:
//totalGlobalVariable = "Never ever do this";
//var globalVariable = "Also never do this";

// What can we do?

// Var is global.
// It propagates outside of scope.
{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

// Call execution stack:
// Everytime you open a scope, it starts an execution stack until it goes out of the scope, where it pops it.
// In this case, anotherValue gets true, another scope opens, anotherValue gets false, and after the curly brace, it pops
// So it comes back to being true.
{
    let anotherValue = true;
    {
        let anotherValue = false;
    }
    console.log(anotherValue)
}

// What will i be in the terminal?
for (var i = 0; i <=5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// The answer is 6 6 6 6 6 6
// Because i is global, so it gets updated before the time comes out.

// You can fix it by using let:
for (let i = 0; i <=5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}