// String can be o two types in java script
// 1. The promitive type
let myString = "Arghya";
console.log(typeof (myString));


let objName = new String("Arghya");
console.log(typeof (objName));


//We can use primitive string as object
console.log(myString.length); //as soon as we use any string method,javascript starts treating the primitive string as an object string.

// Some string methods
console.log(myString.startsWith("a"));
console.log(myString.startsWith("Arg"));

console.log(myString.endsWith('ya'));
console.log(myString.endsWith('gh'));

console.log(myString.indexOf("gh"));

console.log(myString.includes('y'));

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

let _name = " RamCharan             ";
console.log(_name.length);
console.log(_name.trim());
console.log(_name.trim().length);


let message = "And ganguly hits a six and pockets the match init";
console.log(message.indexOf("it")); // it occurs two times but the lowest one is returned.
console.log(message.split(' '));
// message.replace('ganguly', 'tendulkar');
console.log(message.replace('ganguly', 'tendulkar'));
// There are huge numbers of methods available. Head on to mdn docs.





















