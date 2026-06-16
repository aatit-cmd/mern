//! hoisting
// hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// console.log(x)
// var x =10; // ? op= undefined, it does not give error as var is hoisted but it gives undefined as it is not assigned value yet
// console.log(x);


//* function declarartion
// hoist(); //? op= hoist, it works as function declaration is hoisted so we can call it before its declaration

// function hoist(){
    // console.log("hoist");
// }

//? function expression
//fn(); //? op= TypeError: fn is not a function, as var is hoisted but it is assigned undefined, so we cannot call it before its declaration

// var fn = function(){
//     console.log("var function");
// }

// fn();


//* let

// console.log(a);

// const a= 5;
// console.log(a);

// TDZ : temporal dead zone
// TDZ is the zone between the start of the block and the point where the variable is declared. In this zone, the variable is in a "dead" state and cannot be accessed. If you try to access a variable in the TDZ, it will throw a ReferenceError.


// fn ();
// let fn = function(){
//     console.log("var function");
// }

// fn();

//! memory creation phase
//* memory allocation
// {x: undefined, hoist:(){}}
// script :{y: <not available>}


//! execution phase
// {x:34, hoist:(){}, }
// script : {y=45}
//* memory initialization
//* code execution from top to bottom each line

console.log(x);// op= undefined 
var x=32;
console.log(x); //o/p 32

hoist();
function hoist(){
    console.log("hoist");
}
hoist();


let y=45;

//! callstack
// callstack is a data structure that keeps track of the function calls in a program. It is used to manage the execution of functions and to keep track of the current state of the program. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. If the call stack exceeds its limit, it will throw a "stack overflow" error. 
// javascript is a single-threaded language, which means that it can only execute one piece of code at a time. The call stack helps to manage the execution of functions and to ensure that the program runs smoothly.

//! execution context
// global execution context
// functional execution context`