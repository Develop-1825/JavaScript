function tryRest(...arghya)
{
    console.log(arghya);
}

tryRest(1, 2, 3, 4, 5, 6, 7, 8, 9);


function tryRest1(num1,num2,...arghya) // num1 and num2 gets assigned to 1,2 resp. and the rest is assigned to rest
{
    console.log(arghya);
}

tryRest1(1, 2, 3, 4, 5, 6, 7, 8, 9);

//not allowed. rest operator must be the last formal parameter.
// function tryRest2(num1,num2,...arghya,num3)
// {
//     console.log(arghya);
// }

// tryRest2(1, 2, 3, 4, 5, 6, 7, 8, 9);

//The rest operator returns an array of the rest of the passed parameter.
function sum(num1,num2,...arghya) // num1 and num2 gets assigned to 1,2 resp. and the rest is assigned to rest
{
    console.log(arghya);
    let total = 0;
    for(let n of arghya) //array so used for-of
    {
        // console.log(n);
        total += n;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));