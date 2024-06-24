// For loop
// Simple for loop
// Create a for loop that logs out the numbers from 74 - 98

for (let i = 74; i < 99; i++) {
  console.log(i);
}
// For loop in a function
// Create a function that has two parameters: stringToLog and numberOfTimesToLog
// When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog. Use a for loop.
function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}
logString("hello", 3);
// hello
// hello
// hello
