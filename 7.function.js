//* for of
// we use for of to iterate over the values of an array or string
let numbers = [1, 2, 3, 4, 5];

// for(let i =0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

for (c of numbers) {
  console.log(c);
}

for (value of "hello") {
  console.log(value);
}

// for( value in "hello"){
//     console.log(value); //? here it will print the index of each character in the string "hello" because for in iterates over the keys of an object and in a string the keys are the index of each character in the string
//     // o/p= 0,1,2,3,4
// }

//* for in
// we use for in to iterate over the keys of an object
let user = {
  name: "Ram",
  email: "ram@gmail.com",
  password: "123",
};

for (key in user) {
  console.log(key, user[key]);
}

// for(x of user){
//     console.log(x); // here it will give error, for of can not be used
// }

//! functions
// {}

//* function declaration
// function function_name (){
//     // body
//     console.log("hello");
// }

//* function invocation/ call
// function_name(); //? op= hello

// function greet(){
//     console.log("hello world");
// }

// greet();

// function with input
//! parameters and arguments

// function greet(user,  age){
//     console.log("hello",user, age);
// }

// greet("ram");
// greet(89);

// greet(numbers);

// greet("ram", 23);

//* default parmaeters
function greet(user = "guest") {
  console.log("hello", user);
}

// greet();
// greet(numbers);

// add()
// function add(a=0 , b=0){
//     console.log(`sum is ${a+b}`);
//     console.log("sum is", a+b);
// }

// add(2,10);
// add();

//* function with return type
function add(a = 0, b = 0) {
  // console.log("sum is", a+b);
  // let sum = a+b;
  // return sum;

  return a + b;
}

let result = add(12, 5);
console.log(result);

//* multiply
// function multiply(a=1, b=1){
//     return a/b;
// }

// let res = multiply(3,2);
// console.log("multiplication:",res);

//* function expression
// const multiply = function (a=1, b=1){ //here we are assigning an anonymous function to a variable named multiply
//     return a*b;
// }

// console.log(multiply(3,2));

// function divide(a=1, b=1){
//     return a/b;
// }

// console.log(divide(3,2));

function checkEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkEven(4)); //? op= true
// console.log(checkEven(5)); //? op= false

//todo: arrow function, callback function, hof(higher order function)

//! arrow function
// arrow function is a shorter syntax for writing functions in JavaScript
// it is also known as fat arrow function because of the syntax used to define it
// it does not have its own this keyword, it inherits the this keyword from the parent scope
// const multiply =(a=1, b=1){
//     return a*b;
// }
const multiply = (a = 1, b = 1) => a * b;

console.log(multiply(3, 2));

//* callback function
// a callback function is a function that is passed as an argument to another function and is executed after some operation is completed in the parent function
function greetUser(name, callback) {
  console.log("hello", name);
  callback();
}

const parent = (callback) => {
  console.log(callback);
  console.log("parent");
  callback(12);
};

const child = (a) => {
  console.log("child", a);
};

//parent(child); //? op= parent, child 12 this is callback function

//parent(child()); this is not callback function because here we are invoking the child function and passing its return value to the parent function which is not the intended use of a callback function, in a callback function we should pass the function itself as an argument to the parent function without invoking it, so that it can be executed after the parent function is executed.

// here child is call back funciton because it is passsed as a argument to the parent function and it is executed after parent function is executed

// we can also use anonymous function as a callback function

parent((a) => {
  console.log("child", a);
});

let calculate = (a = 0, b = 0, callback) => {
  let x = callback(a, b);
  console.log(x);
};

// let sum = (a,b) =>{
//     return a+b;
// }

// calculate(2,3,sum);

// for mul
calculate(2, 3, (a, b) => {
  return a * b;
});

// for div
calculate(4, 2, (a, b) => {
  return a / b;
});

// for sum
calculate(2, 6, (a, b) => {
  return a + b;
});

//! higher order function
const outer = () =>{
    console.log("outer");
    const inner =() =>{
        console.log("inner");
    }
    return inner;
}

let s = outer();
(s());

//! async function 
//! IIFE Function Immediately Invoked Function Expression
// used for initialization, used when reference is not used
(() => {
    console.log("IIFE")
})()

//todo: array method


const numb = [1, 2, 3, 4];

// Example of map and filter
const doubledEvens = numb
  .filter(num => num % 2 === 0) // [2, 4]
//   .map(num => num * 2);         // [4, 8]

  console.log(doubledEvens)

//   //map
//   //map is used to iterate over an array and return a new array with the modified values
//   const squared = numb.map(num => num * num);
  