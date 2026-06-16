//! array methods
//* push, pop, shift, unshift, splice, idexof, includes..

let numbers = [1, 2, 3, 4, 5];
// let double =[]

//? forEach
// arr.forEach(callback)

// const callback = (value, index, arr) => {
//     console.log(value,index,arr)
//     double[index]= arr[index]*2;
// }

// const res=numbers.forEach(callback);
// console.log(res); // undefined as it does not return anything
// console.log(double)

numbers.forEach((v, i, arr) => {
  console.log(v, i, arr);
});

numbers.forEach((v, i, arr) => {
  console.log(v);
});

//* map x => y
// returns new array
//arr.map(callback)

// const double = numbers.map((num) => {
//   return num * 2;
//   // return 'x'; it will give array ['x', 'x', 'x', 'x']
// });

const double = numbers.map((num) => num * 2);

console.log(numbers);
console.log(double);

const users = [
  {
    name: "ram",
    email: "ram@gmail.com",
  },
  {
    name: "a",
    email: "a@gmail.com",
  },
];

const name = users.map((v) => v["name"]);
console.log(name);

const users_with_username = users.map((user) => {
  return {
    ...user,
    user_name: user.name + "-" + user.email,
  };
});
console.log(users_with_username);

//? filter
// array.filter(callback)

// const even = numbers.filter((val)=>{
//     if (val %2 === 0 ){
//         return true;
//     }
// })

const even = numbers.filter((val) => val % 2 === 0);
const odd = numbers.filter((val) => val % 2 !== 0);

console.log(even);
console.log(odd);

//* reduce

const sum = numbers.reduce((acc, value) => {
  return (acc += value);
}, 0); //here 0 is the initial value of acc, if we do not provide it then it will take the first value of array as initial value and start from second value, so it will give wrong output in case of empty array

console.log(sum);

//todo:
let cart = {
  user: 1,
  items: [
    {
      product: {
        id: 1,
        price: 1000,
      },
      quantity: 10,
    },
    {
      product: {
        id: 2,
        price: 500,
      },
      quantity: 4,
    },
    {
      product: {
        id: 3,
        price: 1500,
      },
      quantity: 6,
    },
  ],
};

const total = cart.items.reduce((acc, value) => {
  return (acc += value["product"]["price"] * value.quantity);
}, 0);

console.log(total);

//* find -> value, undefined
//* findindex -> index, -1
//* every -> boolen
//* some -> boolean
//* sort ->

const arr = [101, 10, 20, 2, 45, 4, 67, 6];

const fruit = ["grapes", "apple", "banana", "grapes"];
fruit.sort();
console.log(fruit);
arr.sort(); // it compare by converting number into strings

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);

arr.sort((a, b) => {
  return b - a;
  //a.localCompare(b) // for string compare we use this instead of b-a
});

// +ve -> swap
// -ve -> no swap
// 0 -> no swap

const students = [
  {
    name: "Ram",
    marks: [42, 55, 80, 92, 98],
  },
  {
    name: "Sita",
    marks: [32, 53, 28, 42, 48],
  },
  {
    name: "Lax",
    marks: [22, 35, 40, 32, 58],
  },
];

// const b = students.map((std)=>{
//     return {
//     ...std,
//     averagemarks: std.marks.reduce((acc,val) =>{
//          return (acc = (acc + val));
//     },0)/std.marks.length,
//     }
// });

// const passed = b.filter((std)=>{
//     return std.averagemarks >= 50;
// })

// const result = passed.map((std)=>{
//     return std.name;
// })

// console.log(b)
// console.log(result);

const calculateAvg = (arr) => {
  return (
    arr.reduce((acc, marks) => {
      return (acc += marks);
    }, 0) / arr.length
  );
};

const result = students
  .map((std) => {
    return {
      ...std,
      // averagemarks: std.marks.reduce((acc,val) =>{
      //      return (acc = (acc + val));
      // },0)/std.marks.length,
      averagemarks: calculateAvg(std.marks)
    };
  })
  .filter((std) => {
    return std.averagemarks >= 50;
  })
  .map((std) => {
    return std.name;
  });

console.log(result);
