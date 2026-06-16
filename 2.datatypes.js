//! Data Types

//! 1. Primitive Data Types

//* number
let a = 10;
let b = 3.14;

//* string
let c = "";
let d = '';

//? template literal => ``
let user = "John";
let e = `Hello, ${user}!`;
console.log(e);

let f = `sum ${2 + 2}`;
console.log(f);

//* boolean
let g = true;
let h = false;

//* undefined
// java script automatically assigns undefined to a variable that is declared but not initialized

let i;
console.log(i); //? op= undefined

//* null
let j = null;
console.log(j); //? op= null

//? difference between undefined and not defined

// let k;
k = 34;
//console.log(k); // referenceerror: k is not defined

//! 2. Non-Primitive Data Types
// non-primitive data types are also called reference data types because they store the reference of the value in memory
// 
//? object

//? array
//? function
