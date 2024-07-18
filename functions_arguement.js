// function sum(a, b) {
//     console.log(arguments); // head onto chrome developer tools to see these. It is an object
//     return a + b;
// }
function sum() {
    let total = 0;
    // console.log(arguments); 
    for(let keys in arguments) { //arguements -> object , so used for in
        total += arguments[keys];
    }
    // console.log(arguments); // head onto chrome developer tools to see these. It is an object
    return total;
}

console.log(sum(2,3)); 
console.log(sum(2)); 
console.log(sum(2,3,4,5,6)); 
