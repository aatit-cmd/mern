//! array
//? array is a data structure that can hold multiple values of different types. It is an ordered collection of items.

let n1 = 1;
let n2 = 2;

//?array constructor
//const arr = new array();

//? array literal []
const numbers = [1, 2, 3, 4, 5];

// number indexed and start from 0

//? accessinf array elements
// arr_name[index] -> returns elements ar specified index
console.log(numbers[3]); //? op= 4
let first_el = numbers[0];
console.log(first_el); //? op= 1

console.log(numbers);

numbers[1] = 20; // it is mutating the original array
console.log(numbers); //? op= [1, 20, 3, 4, 5]

//? adding new elements to an array
//! from end
//* arr_name.push(element) -> adds element at the end of the array
numbers.push(80, 90);
console.log(numbers); //? op= [1, 20, 3, 4, 5, 80, 90]

const res = numbers.push(); //? it returns the new length of the array
console.log(res); //? op= 7

//! from start index
//* arr_name.unshift(element) -> adds element at the start of the array
numbers.unshift(11);
console.log(numbers); //? op= [11, 1, 20, 3, 4, 5, 80, 90]

//? removing elements from an array
//! from end
//* arr_name.pop() -> removes element from the end of the array and returns the removed element

console.log(numbers.pop()); //? op= 90
console.log(numbers); //? op= [11, 1, 20, 3, 4, 5, 80]

//! from start index

console.log(numbers.shift()); //? op=11
console.log(numbers); //? op = [1,20, 3, 4, 5, 80]

//! length of an array
console.log(numbers.length); //? op= 6

// to display last element of an array
console.log(numbers[numbers.length - 1]); //? op= 80

// at() method to access array elements
console.log(numbers.at(2), numbers[2]); //? op= 3 3
console.log(numbers.at(-1), numbers[-1]); //? op= 80 (negative index starts from the end of the array but we can not use negative index to access array elements using square bracket notation)

//! splice () -> it is used to add or remove elements from an array at a specific index
//* array_name.splice(start_index, delete_count, ..items_to_add)

console.log(numbers); //? op= [1, 20, 3, 4, 5, 80]
const response = numbers.splice(1, 2, 100, 200, 300, 400); //? it removes 2 elements from index 1 and adds 100 and 200 at index 1 and response variable stores the removed elements

console.log(response); //? op= [20, 3] (it returns the removed elements)
console.log(numbers); //? op= [1, 100, 200, 300, 400, 4, 5, 80]

//! search
//* includes(item) -> it returns true if the item is present in the array otherwise it returns false i.e it returns a boolean value 
console.log(numbers.includes(100)); //? op =true
console.log(numbers.includes(500)); //? op= false

//* indexof(element) -> it returns the index of the first occurrence of the element in the array if it is present otherwise it returns -1
console.log(numbers.indexOf(300)); //? op= 3
console.log(numbers.indexOf(500)); //? op= -1
console.log(numbers.lastIndexOf(400)); //? op= 4 (it returns the index of the last occurrence of the element in the array if it is present otherwise it returns -1)

//todo: array-methods