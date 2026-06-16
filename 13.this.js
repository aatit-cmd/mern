//! this -> object 
// this is a keyword in javascript that refers to the current object that is executing the code. The value of this depends on how the function is called.

console.log(this);
//module.exports = {}

function a() {
    console.log(this);
}

// a(); //* global object

let user ={
    name: "john doe",
    email : "j@email.com",
    getName: function(){
        console.log(this.name)
    },
};

//user.getName(); // john doe

// arrow function does not have its this 

const fn = user.getName;
fn();

let users ={
    name: "john doe",
    email : "j@email.com",
    getName: ()=> {
        console.log(this)
        console.log(this.name) // op undefined because this is not pointing to users object but pointing to global object and in global object there is no name property
    },
};

users.getName(); //arrow function does not have its own this it takes this from its parent scope which is global object and in global object this is module.exports = {} in node js and window in browser

let userss ={
    name: "john doe",
    email : "j@email.com",
    getName: function(){
        const a =()=>{
        console.log(this.name)
        }
        a();
    },
};

userss.getName(); // john doe because arrow function takes this from its parent scope which is the getName function and in getName function this is userss object

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getName(){
        return this.name
    }
}
const u = new User("john", "j@email.com");
// {} <- this
console.log(u.getName())

//! fucntion object
// function introduce(){
//     console.log("hello world")
// }

// console.log(introduce.name) // introduce

//! call, apply & bind

let i={
    name: "john doe",
    email : "j@gmail.com",
}

let i1 ={
    name: "ram doe",
    email : "r@gmail.com",
}

function introduce(age , email){
    console.log("hello", this.name, age, email)
}

introduce.call(i, 12, "email") 

introduce.apply(i, [12, "email"]) 

//! bind returns a new function with the this value set to the provided value
const fn = introduce.bind(i, 12, "email")
fn() // hello john doe 12 email