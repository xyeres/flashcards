

function makeCountUp(noun) {

    // Anything in this scope is added via the outer function
    // params
    let count = 1;
    // anything in the inner func is set through the object that is returned here

    return function(thoughts) {
        return `${count++} ${noun} - ${thoughts}`;
    }
}

// set outer function params
var count = makeCountUp('a noun')

// Set inner function params
let myCount = count('My thoughts are divine!');

// log the value of the functions return
console.log(myCount)