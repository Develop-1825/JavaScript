// ----------------------------------for-in----------------------------------

let rectangle = {
    length: 2,
    breadth: 4
};

// for (let key in rectangle) iterated over the keys
// {
//     console.log(key,rectangle[key]);
// }


// ----------------------------------for-of----------------------------------
// for (let key of rectangle) //TypeError: rectangle is not iterable
// {
//     console.log(key);
// }


//Getting array of keys/values
console.log(Object.keys(rectangle));
console.log(Object.values(rectangle));
for (let key of Object.keys(rectangle)){ //works
    console.log(key);
}