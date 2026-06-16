// const a = () => {
//   console.log("a");
//   const b = () => {
//     console.log("b");
//     const c = () => {
//       console.log("c");
//     };
//     c()
//   };
//   b();
// };

// a();

// GEC
// callstack

//! closure
// closure is a function that has access to the parent scope, even after the parent function has closed. It allows the inner function to access the variables and parameters of the outer function, even after the outer function has returned.
const parent = () => {
  let x = "parent";
  const child = () => {
    console.log(x);
  };
  return child;
};

const inner = parent();

inner();

// const Counter = () => {
//     let count = 0;

//     const inner = () => {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const counter = Counter(); //{count :}
// const counter1 = Counter(); // {count :}

// counter();//1
// counter();//2
// counter();//3
// counter1();//1
// counter();//4
// counter1();//2

// const Counter = (initialCount = 0) => {
//   let count = initialCount;

//   const increment = () => {
//     count++;
//   };

//   const decrement = () => {
//     count--;
//   };

//   const getcount = () => {
//     console.log(count);
//   };
//   return {
//     increment,
//     decrement,
//     getcount,
//   };
// };

// const counter = Counter(5);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.getcount();

// //! function factory
// const add = (factor) => {
//   return (num) => {
//     return factor + num;
//   };
// };

// const add = (factor) => (num) => factor + num; // one line code of above

// const add5 = add(5);
// const add10 = add(10);

// console.log(add5(10)); // 15
// console.log(add5(20)); //25
// console.log(add5(15)); // 20
// console.log(add5(15)); // 20

// console.log(add10(3));//13

//* caching

// const sum = ()=> {
//     let cache = {};
//     return (num) => {
//         if(cache[num.toString()]){
//             return cache[num.toString()]
//         }else{
//         let res =0 ;
//         console.log("calculating")
//         for(let i=0;i<900000;i++){
//             res = num * 10000
//         }
//         cache[num.toString()]=res;
//         return cache[num.toString()];
//     }
//     }
// }

// const x =sum();
// console.log(x(2));
// console.log(x(2));
// console.log(x(2));

// console.log(x(3));
// console.log(x(3));
// console.log(x(3));


//! Account(acc_name,initial amount)
//* deposit , withdraw, balance inquiry

const Account = (acc_name,amount=0) => {
  let name = acc_name;
  let balance = amount;
  const deposit = (a) =>{
    if(a<0){
      console.log("invalid amount. deposit amount must be positive")
      return
    }
      amount =amount +a;
      console.log("new balance:",amount);
  }
  const withdraw = (a) => {
    if(a < 0){
      console.log("insufficent amount")
      return
    }
    if(amount -a > 500){
      console.log('insufficent amount');
      return
    }
    amount = amount -a;
    console.log("total balance:", amount)
  
  }
  const inquiry =() =>{
    console.log("your balance is",amount);
  }
  

  return {
    deposit,
    withdraw,
    inquiry,
  }
}

acc1 =Account('ram',500);
acc1.inquiry()
acc1.deposit(-100)
acc1.withdraw(-650)
// acc1.inquiry()