
// ------------------------Factory Function------------------------
// function createRect()
// {
//     return rectangle = {
//         length: 1,
//         breadth: 3,
    
//         draw: function () //object method
//         {
//             console.log("Draw Rectangle");
//         }
//         //call rectangle.draw()
//     };
//     // return rectangle;
// }

// function createRectangle(len,bre)
// {
//     return rectangle = {
//         length: len,
//         breadth: bre,
    
//         draw: function () //object method
//         {
//             console.log("Draw Rectangle");
//         }
//         //call rectangle.draw()
//     };
//     // return rectangle;
// }

// let rect1 = createRectangle(14,9);
// console.log(rect1);

// ------------------------Constructor function------------------------
function CreateRectangle(len , bre)
{
    this.length = len,
    this.breadth = bre,
    this.draw = function () {
        console.log("Drawing Constructor function.")
    }
}


//new object
let obj1 = new CreateRectangle(4, 19);
//Adding a new key value pair.
// obj1.color = "yellow";
obj1["color"] = "yellow";
console.log(obj1);
// delete obj1.color;
// console.log(obj1);

console.log(obj1.constructor);
