let src = {
    a: 1,
    b: 2,
    c: 3
};

let src2 = {
    d: 5,
    e: 6,
    f: 4
};

let dest = {};

// ----------------------using iteration----------------------
// for (key in src)
// {
//     dest[key] = src[key];
// }

// console.log(dest);



// ----------------------using assign operator----------------------

// dest = Object.assign({}, src,src2); //the properties of src is assigned into the  {} empty object, which is then finally assigned to the destination object || Multiple objects can be cloned into one .
// console.log(dest);








// ----------------------using spread operator----------------------
dest = { ...src }; //the three dots is spread operator
console.log(dest);