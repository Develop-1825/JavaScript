let a = [1, 57, -2, 33, -7, -8, 41, 52];

// var filtered = a.filter(function (n) {
//     return n >= 0;
// });

var filtered = a.filter(n =>  n >= 0);
console.log(filtered);

// The flow:
/* 
The filter function takes a predicate function. The predicate function checks all the elements one by one as per the condition of the function.
If element >=0 is true then the element is returned to the outer function.
*/

// var mapped = a.map(function (n) {
//     return n * 2;
// });
var mapped = a.map(n=> "you have scored " + n);
console.log(mapped);
var mapped = a.map(n=> n*2);
console.log(mapped);


//-------------------Mapping array elments to objects-------------------
// var obj = a.map(function (n) {
//     let _obj = { score: n };
//     return _obj;
// });
var obj = a.map(n => ({ score: n })); //important to note,while making arrow function you need to keep the object inside parentheses.
console.log(obj);

//The issue with your code is that the arrow function in the map method is not returning an object correctly. When using arrow functions with implicit returns, curly braces {} are interpreted as a block, not as an object literal. To return an object literal, you need to wrap it in parentheses.




//-------------------Chaining-------------------------
// var filtered = a.filter(n =>  n >= 0);
// var mapped = filtered.map(n=> "you have scored " + n);
// var obj = mapped.map(n => ({ score: n }));
// console.log(obj);

//The above can be written as
var scores = a
    .filter(n =>  n >= 0)
    .map(n => "you have scored " + n)
    .map(n => ({ score: n }));
console.log(scores);
    