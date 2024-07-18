drive(); //hoisting makes this possible.
// Function Declaration
function drive() {
    console.log("Driving");
};

// Function assignment

//named function assignment
let myFunc = function walk() {
    console.log("Walking");
}
myFunc(); //this has to be called here

//Anonymous function assignmnet
let myFunc1 = function() {
    console.log("Anonymous");
};
myFunc1();

function sum(a, b) {
    return a + b;
}

console.log(sum(2,3)); //returns sum=5
console.log(sum(2)); //returns NaN, because second parameter is not passed and hence b=undefined.
console.log(sum(2,3,4,5,6)); //returns sum=5
