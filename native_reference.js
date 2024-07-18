//-------------------------Native-------------------------
// let a = 10;
// let b = a; //a copy of a is stored in b

// a++;
// console.log(a);
// console.log(b);


//-------------------------Reference-------------------------
let a = { value: 10 };
let b = a; // the adress of a is assigned to b. So, now a and b point to  {value:10 }

a.value++;
console.log(a);
console.log(b);


