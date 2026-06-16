//! scope
//* visibility or accessibility of variables

//? global scope
// let x = 10;
// const y = 11;
// var z = 12;

if (true) {
  //   console.log(x, y, z);
}

const scope = () => {
  //   console.log(x, y, z);
};

//? block scope -> {}
{
}

if (true) {
  //   let x = 1;
  //   const y = 2;
  //   var z = 32;
  //   console.log(x, y, z);
}
// redeclaration is not possible under same scope
// let and cost are block scoped and var is function scoped

// let z = 10;
// if (true) {
//   var z = 20;

// }
// console.log(z); //? op= identifier z has already been declared

//? function scope
const scope1 = () => {
  let a = 10;
  const b = 11;
  var c = 12;
  console.log(a, b, c);
};
scope1();

//console.log(c); //? op= identifier c is not defined

//todo:
// lexical scope
const outer = () => {
  let x = 10;
  const inner = () => {
    let a = "a";
    // x = 'x'
    console.log(x);
  };
  inner();
  //console.log(a); we cannot access a
};
outer();

// scope chain
let x = 10;
const outer = () => {
  const inner = () => {
    let a = "a";
    // x = 'x'
    console.log(x);
  };
  inner();
};
outer();

//let x =45; 
 
if (true){
    let x=25;
    if(true){
        console.log(x);
        x=23
        console.log(x);
    }
    console.log(x);
}

// var is global scoped even if we declared inside a block