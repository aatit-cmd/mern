// //! time
// let time = {
//   hour: 0,
//   minute: 0,
//   second: 0,
// };

// let total_second = 3666;

// const convert = (total_second) => {
//   time.hour = parseInt(total_second / 3600)
//     .toString()
//     .padStart(2, "0");
//   time.minute = parseInt((total_second % 3600) / 60)
//     .toString()
//     .padStart(2, "0");

//   time.second = parseInt(total_second % 60)
//     .toString()
//     .padStart(2, "0");
// };

// convert(total_second);
// console.log(time);

// //! electricity bill
// let total_units=100;

// if(total_units<101){
//     total= total_units *1;
// }
// else if(total_units>100 && total_units<201){
//     total =100*1 + (total_units-100) * 2;
// }
// else{
//     total =100*1 +100 * 2+ (total_units -200)*5;
// }

// console.log(total)


let totalFriends=5;
let amount=5678;

console.log(`per person : ${Math.floor(amount/totalFriends)}
remainder : ${amount%totalFriends}`)

const age = (bday) =>{
  // let today = new Date()
  // let birth = new Date(bday)
  let difference = new Date() - new Date(bday)
  const msInADay = 1000 * 60 * 60 * 24;
  const dayDifference = Math.floor(difference / msInADay);
  console.log(Math.floor(dayDifference/365)) 
}
age("2004/05/31")


const price = (basePrice, discount) => {
  basePrice = basePrice - ((basePrice * discount) / 100);
  console.log("final price",basePrice.toFixed(2));
}

price(100,12);

const salary = (hour) => {
  if (hour < 0) {
    console.log("invalid hour");
    return;
  }
  if (hour < 40) {
    wages = hour * 20;
    console.log("your salary is :", wages);
    return;
  }
  wages = 800 + (hour - 40) * 30;
  console.log("your salary is :", wages);
};

salary(20);

const days = (totalday) =>{

  const year = Math.floor(totalday / 365);
  const month =Math.floor((totalday % 365)/30);
  const days = Math.floor((totalday % 365)%30)
    console.log("year:",year,"month:",month,"day:",days)
}

days(600)