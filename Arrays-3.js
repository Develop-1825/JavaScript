// --------------------------Sorting--------------------------

// let a = [50,40,20,10,30,60];
let a = [1, 57, 2, 33, 7, 8, 41, 52];
//=> reason for wrong answer is that,without a call back function in reference data types,the elments are considered as String. And has greater value as string.

a.sort(); //by default sorts elments as strings
console.log(a);

//reverse sort
console.log(a.sort().reverse());

//---->Numeric sort . use call back function
a.sort(function (a,b) { return a - b });
console.log(a);



// ---------------------Array of objects----------------
let students = [
    { no:4, fName: "Arnab" }, 
    { no:3, fName: "Sounak" },
    { no:2, fName: "Sayak" },
    { no:1, fName: "Arghya" },
]

//-->sorting with respect to 'no'
students.sort(function (p1, p2) {
        return p1.no - p2.no;
});
    

//--->sorting with respect to 'fName'
students.sort(function (p1, p2) {
    if (p1.fName < p2.fName) {
        return -1;
    }
    if (p1.fName > p2.fName) {
        return 1;
    }
    return 0;
})

console.log(students);
