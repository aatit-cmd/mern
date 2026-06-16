// ES -> ECMA Script
// ES6 -> ECMA Script 2015

// let and const
// var -> function scope
// let and const -> block scope
// template literals -> `${}`
// arrow functions -> () => {}
// es module -> import and export

// promises -> async and await

// enhanced object literals -> object property shorthand, method definitions, computed property names
// let name = "john";
// let key = "email";
// let obj = {
//     name,// name : name,
//     [key] : "" ,// email : ""
//     // getname : function(){
//     //     console.log(this.name);
//     // }
//     getname(){
//         console.log(this.name);
//     }
// }

// class syntax

// destructuring
let john = {
    name : "john",
    age : 20,
    email : "j@gmail.com"
}

let {name, age, email} = john;

console.log(name, age, email);

//! rest and spread operator
// rest -> ... -> used to collect the remaining elements into an array
// spread -> ... -> used to spread the elements of an array or object into another array or object

// rest
function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3,4));

// spread
let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5];
console.log(arr2);

let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3};
console.log(obj2);

//! rest parameter ... 
function add(...numbers){   
    return numbers.reduce((acc, curr) => acc + curr);
}

console.log(add(1,2,3,4,5)); 