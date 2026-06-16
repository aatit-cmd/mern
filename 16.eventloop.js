//! event loop
// event loop is a mechanism which is used to handle asynchronous operations in JavaScript. It is a single thread which is responsible for executing the code and it is also responsible for handling the events and callbacks. The event loop is a loop which runs continuously and it checks for the events and callbacks in the queue and executes them one by one. The event loop is a part of the JavaScript runtime environment and it is responsible for handling the asynchronous operations in JavaScript. The event loop is a mechanism which allows JavaScript to be non-blocking and it allows us to write asynchronous code in a synchronous way. The event loop is a mechanism which allows us to write code that can run in the background without blocking the main thread and it allows us to write code that can run in parallel with other code. The event loop is a mechanism which allows us to write code that can run in the background without blocking the main thread and it allows us to write code that can run in parallel with other code.

// web apis : timers, dom events, fetch, promises:{onResolve : (){}, onReject : (){}}, fetch, global objects,geo location etc

// queue -> FIFO -> first in first out
// macro / call back queue -> setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering, etc
// microtask / job queue -> promises, process.nextTick, queueMicrotask, mutationObserver, etc

// event loop -> call stack -> web apis -> callback queue -> event loop

console.log("a");

setTimeout(() => {
  console.log("processing...");
}, 2000);

console.log("b");

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5); 