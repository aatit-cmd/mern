//!control flow

//!control statements

//* if
let age = 18;
if (age) {
  console.log("age is ", 18);
}

//* if else
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("cannot vote");
}

//* if else ladder/ else if
if (age >= 60) {
  console.log("major");
} else if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

//* switch-case
let day = 2;
switch (day) {
  case 1: {
    console.log("sunday");
    break;
  }
  case 2: {
    console.log("monday");
    break;
  }
  case 3: {
    console.log("tuesday");
    break;
  }
  case 4: {
    console.log("wednesday");
    break;
  }
  case 5: {
    console.log("thursday");
    break;
  }
  case 6: {
    console.log("friday");
    break;
  }
  case 7: {
    console.log("saturday");
    break;
  }
  default: {
    console.log("enter day between 1 to 7");
  }
}

switch (day) {
  case 1:
  case 7: {
    console.log("weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("working day");
    break;
  }
  default: {
    console.log("enter day between 1 to 7");
  }
}

//? loops
//* for loop
for (let k = 0; k <= 10; k++) {
  console.log(k);
}

//* while loop
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

//* do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

//* for-of

//* for-in

//* jump/ branch statements
//? break, 
for (let k = 0; k <= 10; k++) {
    if (k == 5) {
        break;
    }
  console.log(k);
}
//? continue, 
for (let k = 0; k <= 10; k++) {
    if (k == 5) {
        continue;
    }
  console.log(k);
}
//? return
for (let k = 0; k <= 10; k++) {
    if (k == 5) {
        return 32;
    }
  console.log(k);
}