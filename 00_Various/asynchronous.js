/*
Javascript is single-threaded

Examples: 
fetching over a network
Heavy calculations
reading/writing to files
hashing
databases

Solution 1: Callbacks
Con: Callback hell (pyramid of hell)

Solution 2: Promises
Two states: pending and fullfilled (rejected, resolved)

Solution 3: Async/Await: Syntatic sugar for promises, which are sintactic sugar for callbacks.

IIFE: Immediately Invoke Function Expression
*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Yaaaay")
        } catch {
            reject("NAAAAY");
        }
        
    }, 3000)
    
}).then(successMessage => console.log(successMessage)).catch(errorMessage => console.log(errorMessage));

function celebrate() {
    return new Promise((resolve, reject) => {
        resolve("Celebrationnnnn");
    })
}

// call celebrate and handle the resolve/reject
celebrate().then(message => console.log(message));


