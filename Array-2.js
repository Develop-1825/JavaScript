// --------------------------Combining--------------------------

let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = a.concat(b);
console.log(combined);

var combined1 = [...a,'a', ...b,'b'];
console.log(combined1); 



// --------------------------slicing--------------------------

let sliced = combined.slice(1, 4); // index 1 to 3
let sliced2 = combined.slice(4); // index 4 to end
console.log(sliced);
console.log(sliced2);


// --------------------------iterating on array--------------------------
//for-of 
for (i of combined1) {
    console.log(i);
}

//for-each -> uses a call back function
combined1.forEach(function (element) {
    console.log(element)
});
combined1.forEach(element =>
    console.log(element)
);

// --------------------------joining elements of array--------------------------

var arr1 = [1, 2, 3, 4];
console.log(arr1.join("+"));
