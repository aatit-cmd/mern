//! operators

//* arithmetic operators
//? +, -, *, /, %, **

console.log(2 + 3); //? op= 5

let sum = 2 + 3;

let a = 10;
let b = 5;

console.log(a + b);

console.log(11/5); //? op= 2.2
console.log(11%5); //? op= 1

console.log(2**3); //? op= 8

console.log("hello" +" "+ "world"); //? string concatenation

//* assignment
//? =, +=, -=, *=, /=, %=, **=

let c = 10;
c += 5; //? c = c + 5
console.log(c); //? op= 15

let d = 20;
c += d; //? c = c + d
console.log(c); //? op= 35

//* comparison operators
//? ==, ===, !=, !==, >, <, >=, <=
//? output of comparison operators is always boolean

console.log(10<10); //? op= false
console.log(10<=10); //? op= true


let x = 10;
let y = 10;

console.log(x == y); //? op= true
console.log(x === y); //? op= true

let p = "10";

console.log(x == p); //? op= true
console.log(x === p); //? op= false

//* logical operators
//? and &&, or ||, not !

console.log(true && true); //? op= true (&& is called short circuit operator because if the first operand is false then it will not check the second operand)
console.log(true && false); //? op= false

console.log(true || false); //? op= true
console.log(false || false); //? op= false

console.log(!true); //? op= false
console.log(!false); //? op= true

console.log(false && "hello");

let is_admin = true;
let res = is_admin && "admin"
console.log(res); //? op= admin

let is_admin2 = false;
let res2 = is_admin2 && "admin";
console.log(res2); //? op= false

//* typeof operator
console.log(typeof 10); //? op= number

x= "abc";
console.log(typeof x); //? op= string

let q;
console.log(typeof q); //? op= undefined

let r = null;
console.log(typeof r); //? op= object (this is a bug in javascript but it is not going to be fixed because it will break the existing code)

//* bitwise operators
// &, |, ~ 
console.log(5 & 3); //? op= 1 (0101 & 0011 = 0001)
console.log(5 | 3); //? op= 7 (0101 | 0011 = 0111)


//* unary operators
// increment ++, decrement --, unary plus +, unary minus -
// incremenr ++ 
let count = 10;
//post
console.log(count++); //? op= 10 (first it will return the value and then it will increment)
console.log(count); //? op= 11

//pre
console.log(++count); //? op= 12 (first it will increment and then it will return the value)
console.log(count); //? op= 12

//! ternary operator
//? condition ? expression1 : expression2

let age = 18;
let is_adult = age >= 18 ? "can vote" : "cannot vote";
console.log(is_adult); //? op= can vote


// todo: type conversion operator
//type conversion is the process of converting a value from one type to another. In javascript, we can use the following functions for type conversion:
// type 
// explicit
console.log(Boolean(123)); //? op= true
console.log(Number("123")); //? op= 123
console.log(String(true)); //? op= "true

// parseInt() and parseFloat() are also used for type conversion but they are not operators, they are functions."

//? parseInt() 
console.log(parseInt("123.45")); //? op= 123

console.log(parseInt("123abc")); //? op= 123 (it will parse the number until it encounters a non-numeric character)

// implicit


//? String(), Number(), Boolean()

let num = 10;
let str = String(num);
console.log(str);
console.log(typeof str); //? op= string

let str2 = "123";
let num2 = Number(str2);
console.log(num2);//? op= 123
console.log(typeof num2); //? op= number

let str3 = "abc";
let num3 = Number(str3); //? op= NaN (Not a Number)
console.log(num3); //? op= NaN (Not a Number)


// todo: type coearcing  
//? type coercion is the process of converting a value from one type to another automatically by javascript. It happens when we use operators with different types of operands.

console.log(10 + "5"); //? op= 105 (number is converted to string)
console.log("5" - 2); //? op= 3 (string is converted to number)
console.log("5" * 2); //? op= 10 (string is converted to number)
console.log("5" / 2); //? op= 2.5 (string is converted to number)       


// todo: truthy and falsy values
//? falsy values: false, 0, -0, "", null, undefined, NaN
//? truthy values: all values that are not falsy

console.log(Boolean(false)); //? op= false
console.log(Boolean(0)); //? op= false
console.log(Boolean("")); //? op= false
console.log(Boolean(null)); //? op= false
console.log(Boolean(undefined)); //? op= false
console.log(Boolean(NaN)); //? op= false

console.log(Boolean(true)); //? op= true
console.log(Boolean(1)); //? op= true
console.log(Boolean("hello")); //? op= true
console.log(Boolean([])); //? op= true (empty array is truthy)
console.log(Boolean({})); //? op= true (empty object is truthy)


let user = findById(id);

if (user === null || user === undefined) {
    throw new Error("User not found");
}

//? we can also write the above code as

if (!user) {
    throw new Error("User not found");
}