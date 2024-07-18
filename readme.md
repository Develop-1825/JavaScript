# Introdution

Javascript can be used to code both server and client side.
Javascript needs a JS runtime engine in order to run on local machine.
In mozilla firefox the js engine is named SpiderMonkey and in Chrome it is called V8 engine.

- Somebody added JS in C++ and then we got Node.
- All client side codes are written inside <script>
- Variables

# Variables

1. let -> dynamic type i.e., int bool string char
2. var
3. const -> fixed value, changing value later is not possible.

## Diffrence between var and let : scope

    scope of let is within a block it is declared in.
    scope of var remains in the whole body

    let variable cannot be re-declared within the scope
    var variable can be re-declared within the scope

# Primitive data types

    1. String
    2. Number (int nad float both)
    3. Boolean
    4. Undefined (analogous to garbage value in c++/ None in python)
    5. Null

# Dynamic typing

    let a = 5;
    a = "arghya";

    'The above is possible'.

# Reference types (analogous to &variable \*variable i.e., changes are reflected on all objects no matter what their names) because in objects we deal with address. But in primitive types a copy is made.

    * Objects - key:value pairs

        let person ={
            firstName = "Arghya",
            age = 23
        };

        -> Access:
            1.Dot notation -> person.age;
            2.Bracket notation -> person["age"];


    * Arrays
        Data structure used to contain a list of items.

        let items = ["Arghya",2,true];
        -> Access:
            items[0] -> Arghya
            items[3] -> undefined

            items[3]='Rajan'
            adds item to array : items = ["Arghya",2,true,"Rajan"];

            items[2]=false;
            modifies 2nd index to be false : items = ["Arghya",2,false,"Rajan"];


    * Functions
        Functions in javascript is also an object.

# Logical operators

    All same
    Only equality are different.
    # === -> strict equality (makes sure data type and values both are same)
    # == -> loose equality (only values must be same)

        Eg:
        let a=1;
        let b='1';
        (a==b) -> true
        (a===b) -> false

    # !== -> not equal

# Ternary operator

    (condition) ? (expression for true) : (expression for false);

# Logical operator

    AND (&&)
    OR (||)
    NOT (!)

### Non-Booleans

    (true || 'Aman') -> output will be Aman

    falsy values : undefined,null,0,false, ' ' , Nan
    truthy values : anything that is not falsy

    (falsy || truthy) -> truthy
    (falsy || falsy ) -> falsy

### Short circuiting in Logical OR

    (false || 5 || 1) ->5
    reason : (false || 5) gives 5 which is a truthy value. As soon as we get a truthy value no more checking/execution is done.

# Operator precedence

Usual

# Conditional

    if-else
    switch

# Loops

    1. for
        for(let i=0;i<n;i++)
        {...}

    2. while

    3. do-while
    4. for-in (can iterate over objects) -> Use this for objects
    5. for-of (applied on iterables like maps,arrays,NOT OBJECTS i.e., can't iterate over key value pair) -> use this for iterables
    6. for-each
    //for-each -> uses a call back function
    combined1.forEach(function (element) {
    console.log(element)

});

# Object creation

1. Factory Function
   (Returns an object instance)
   (camelCase notation naming convention)
   (this keyword is not used)
2. Constructor Function
   (No return statement)
   (PasCal notation naming convention this is used)
   (this keyword is used)

### Dynamic Nature of Objects

- Removal and addition of attributes/properties inside an object
  Adding:
  'object.key=value;' //adds a new attribute to the object

  Removal:
  'delete obj.key_name;' //removes the attribute from the object

### Constructor Property

    -- Every js object has a constructor property that represent how the object is created.
    -- Invoke the constructor using 'obj_name.constructor;'

### In javascript function is also an object. It is a native object i.e., in-built. You can check it using its constructor function. 'function.constructor;'

### Primitive data types are copied by value( pass by value) and reference data types are copied by their address/reference( pass by reference).

## Accessing only keys / values in an object:

    Syntax : 'Object.keys(obj_name);' //returns array of keys,case sensitive syntax
    Syntax : 'Object.values(obj_name);' //returns array of values,case sensitive syntax

## Check if property exists inside object

    similar to python membership operator - 'in'

## Interview Topics

- Object cloning can be done using
  ** Iteration
  ** Assign -> "dest = Object.assign({},src)" Multiple objects can be cloned at once
  ** Spread -> "dest = {...src}"
  **

## Garbage Collection

- The garbage collector finds the unused const/var variables and deallocates their memory.
- We Have no control over the garbage collector

## Primitive/Normal array methods do no work on ' array of "objects" '. We need "callback functions / predicate functions" to do such operations.

    Predicate meaning 'condition'

- The callback function is named find();
- Syntax : array_name.find(call_back_function(array_name){return array_name.attr == value_to_find});
- Return type -> Object that is to be found (if found) else returns 'undefined'

## Hoisting

- Hoisting is the process where all the functions are brought to the top of the files.
- Hoisting is the process of moving all function declaration to the top of the file.
- JAVASCRIPT is able to perform hoisting automatically.

## Function assignment

- Assigning a function to a variable
  - Named
  - Anonymous

** We can call a function anywhere in the body when it is declared.
** But, we cannot call a function any where when it is assigned.
Because, JavaScript can automatically perform hoisting on fucntion declaration but not on function assignment.

## Special object - 'arguements'.

consists all the parameters passed in to the function irrespective of the fact wheather the function declaration accepts parameter or not.

## Special parameter in function declaration : 'rest parameter' func(...args)

- This parameter must be the last formal parameter that the function takes.

## Getter setter

- Getter setters are not functions.
- get_set.js
- getter gets the value. No parameters
- setter sets new value. So there is a parameter.
