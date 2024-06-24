// If sentences
// Create an if sentence that will give a user a message based on his bank account balance. Use the balance variable and change that.

// If a user has 0 or less balance log out 'Please deposit some money!'
// If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
// If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
// If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
// If a user has more than 10000 log out 'Your balance is AMAZING!'

const balance = 1000;
if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance <= 1000) {
  console.log("Your balance is looking okay");
} else if (balance <= 3000) {
  console.log("Your balance is looking good");
} else if (balance <= 10000) {
  console.log("Your balance is fantastic");
} else if (10000 < balance) {
  console.log("Your balance is AMAZING!");
} else {
  console.log("Sorry we cannot help you"); // to make sure we catch everything. e.g. balance = NaN;
}
// Do not need 0 < balance if you have a balance <= 0;
// when it check from left to right of the whole number line. Because it check line by line in the if-else.
// Always use the same direction of < or > in all conditions, not merge them

// const balance = 1000;
// switch (true) {
//   case balance <= 0:
//     console.log("Please deposit some money!");
//     break;
//   case 0 < balance && balance <= 1000:
//     console.log("Your balance is looking okay");
//     break;
//   case 1000 < balance && balance <= 3000:
//     console.log("Your balance is looking good");
//     break;
//   case 3000 < balance && balance <= 10000:
//     console.log("Your balance is fantastic");
//     break;
//   case 10000 < balance:
//     console.log("Your balance is AMAZING!");
//     break;
//   default:
//     console.log("Sorry we cannot help you")
// }

// const balance = 1000;
// (balance <= 0) ? console.log("Please deposit some money!"):
// (0 < balance && balance <= 1000) ? console.log("Your balance is looking okay"):
// console.log("Your balance is AMAZING!");



