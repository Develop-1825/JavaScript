let arr = [1, 2, 3, 4];
let total = 0;

for (let value of arr)
{
    total += value;
}

// console.log(total);
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);//0-> initial value of accumulator.If not provided then the first value of the array becomes the initial value of accumulator.
//current value takes the value of the next element to accumulator value. 
console.log(totalSum);

// (accumulator,currentValue) -> is a callback function
// Prevents writing a loop