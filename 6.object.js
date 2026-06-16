//! object
//? object is a non-primitive data type that stores a collection of key-value pairs. It is also called a reference data type because it stores the reference of the value in memory. It is mutable i.e we can change the value of an object after it is created.

// object construtor
const obj1 = new Object();

//! object literal -> {}
let user = {
  name: "john",
  email: "john@example.com",
  address: {
    city: "ktm",
    country: "Nepal",
  },
};

console.log(user.address.city); //? op= ktm

console.log(user["address"]["country"]); //? op= Nepal replace dot withh bracket notation to access the vlaue with bracket notation

let u = ["john", "john@example.com"];
let u2 = ["email", "name"];

let users = [
  {
    name: "john",
    email: "john@example.com",
  },
  {
    name: "doe",
    email: "doe@example.com",
  },
];

// accessing array with index but we can not access object properties with index we have to use the key to access the value of the property
// we use key to access the value of the property in an object

console.log(obj1, user); //? op= {}

//! reading properties
//* dot notation
const name = user.name; //? op= john
console.log(name);

//* bracket notation []
// we have to use bracket notation when the key is stored with a space or when we want to access the key dynamically i.e when the key is stored in a variable

console.log(user["email"]); //? here we have to pass the key as a string in the bracket notation to access the value of the property in an object

// dynamic key access
let key = "name";
console.log(user.key); //? op= undefined (it will look for the property with the name 'key' in the user object but it is not present in the user object)

console.log(user[key]); // user['email']
//? op= john (it will look for the property with the name 'name' in the user object and it is present in the user object)

console.log(user);

//! adding new properties to an object
user.password = "12345";

user["age"] = 30;

console.log(user);

//! modifying
user.password = "password123";

//! delete
delete user.age;
console.log(user);

// user= user2;
// user.name='doe';
// console.log(user,user2); //? here both user and user2 will be modified because they are pointing to the same object in memory i.e they are referencing the same object in memory

// { user: &1234, user2: &1234}

//heap
// &1234

let a = {
  a: 1,
  b: 2,
};

let c = {
  d: 1,
  a: 20,
};

//* spread operator ...  -> it is used to copy the properties of an object to another object
let b = { ...a, ...c }; //? it will copy the properties of object a and object c to object b and if there are duplicate keys then the value of the last key will be taken

a.c = 3;

console.log(a); //? op= {a: 1, b: 2, c: 3}
console.log(b); //? op= {a: 20, b: 2, d: 1} (it will not be affected by the change in object a because it is a shallow copy of object a and it is not referencing the same object in memory as object a)

let d = [...[12, 34], ...[45, 56]]; //? it will copy the elements of the array to the new array d
console.log(d); //? op= [12, 34, 45, 56]

//* destructuring -> it is used to extract the properties of an object and assign them to variables

let john = {
  name: "john",
  email: "john@example.com",
  password: "12345",
};

// let name= john.name;
// let email = john.email;
// let password = john.password;

let { name:john_name, email, password } = john; //? it will extract the properties of the john object and assign them to the variables name, email and password
// here the key name must be same as the variable name to extract the value of the property from the object and assign it to the variable otherwise it will return undefined

console.log(john_name, email, password);
let john1 = {
  name: "john",
  email: "john@example.com",
  password: "12345",
};

let { name: user_name, email: user_email, password: user_password } = john1;
console.log(user_name, user_email, user_password);

//! rest operator ..
let { name: rest_name, ...rest } = john1; //? it will extract the name property from the john1 object and assign it to the variable name and the rest of the properties will be assigned to the variable rest as an object

console.log(rest); //? op= {email: "john@example.com", password: "12345"}

console.log(Object.keys(john1)); //? it will return an array of the keys of the john1 object
console.log(Object.values(john1)); //? it will return an array of the values of the john1 object
console.log(Object.entries(john1)); //? it will return an array of the key-value pairs of the john1 object as an array of arrays

let entries = [
  [ 'name', 'john' ],
  [ 'email', 'john@example.com' ],
  [ 'password', '12345' ]
];

console.log(Object.fromEntries(entries)); //? it will convert the array of key-value pairs to an object

