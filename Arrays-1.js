let nums = [1,3,5,7];
console.log(nums);

// ------------------------------------Insertion------------------------------------

// Insertion AT END
nums.push(99);
console.log(nums);


// Insertion AT beginning
nums.unshift(0);
console.log(nums);

// Insertion at middle
nums.splice(3,0,'a','b','c'); //syntax  : splice(index to insert at,delete stuff,insert stuff)
console.log(nums);


// ------------------------------------Searching------------------------------------
//Searching
console.log(nums.indexOf('b'));
console.log(nums.indexOf('250')); //if doesn't exist then -1 is returned

//Start searching from a index of your choice
console.log(nums.indexOf('b', 5)); //search for 'b' from 5th index


// ------------------------------------Exist------------------------------------
//Exists or not
if (nums.indexOf('d') != -1) {  //VERY BORING method
    console.log("Present");
}
else {
    console.log("Absent"); 
}

console.log(nums.includes('g'));


// ------------------------------------Removing------------------------------------
// Removing elements
let numbers = [1, 2, 3, 4, 5, 6, 8, 9];
//from beginning -> shift()
numbers.shift();
console.log(numbers);
//from end -> pop()
numbers.pop();
console.log(numbers);
//from middle ->splice(from_index,no.of element you want to delete)
numbers.splice(2, 1); //remove 1 element from 2nd index
console.log(numbers);


// ------------------------------------Empty the array------------------------------
//empty the array

// method-1(Best)
numbers.length = 0;
console.log(numbers);

// method-2(Better)
numbers.splice(0, numbers.length);
console.log(numbers);

//method-3(Good)
while (numbers.length > 0)
    {
        numbers.pop();
    }
    console.log(numbers);










console.log("\n---------------------------------------------------------------");


//----------------------------On array of objects----------------------------//
let students = [
    { no:1, fName: "Arghya" },
    { no:2, fName: "Sayak" },
    { no:3, fName: "Sounak" },
    { no:4, fName: "Arnab" }, 
]
console.log(students);
console.log(students.includes({ no:1, fName: "Arghya" }));
console.log(students.indexOf({ no: 1, fName: "Arghya" }));
//So, we get false and -1 because the object is a reference data type. The object that is inside students and the object that we've passed in console.log() have separate reference/address. So, they return false.

//So, to resolve this we need callback functions. Call back functions returns an object.

var isPresent = students.find(function (one_student) {
    return(one_student.fName == 'Arghya')
});


// Since we are passing only one parameter and condition is one-liner, we can also write the function shorter as following:
var isPresent = students.find(one_student => one_student.fName === 'Arghya');
// this is called arrow function
console.log(`isPresent = ${Object.values(isPresent)}`);





    











