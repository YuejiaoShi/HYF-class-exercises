const fruits = ["apple", "banana", "orange"];
// Investigate array methods: pop, push, shift, unshift, includes

// without touching the above lines, add "kiwi" to the fruits array
fruits.push("kiwi");
console.log(fruits);
// extract "kiwi" from the array and log it out
// the fruits array should now be without "kiwi"
fruits.pop();
console.log(fruits);

// without touching the above lines
// add dragonfruit and elderberry to the array
fruits.unshift("dragonfruit", "elderberry");
console.log(fruits);

// console.log "Banana in fruit basket" or "No Banana in ..."
// whether "banana" is inside of the fruit array
const fruit = "banana";
function capitalFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
if (fruits.includes(fruit)) {
  console.log(`${capitalFirstLetter(fruit)} in fruit basket`);
} else {
  console.log(`No ${capitalFirstLetter(fruit)} in fruit basket`);
}

// add strawberry to the beginning of the fruit array
fruits.unshift("strawberry");
console.log(fruits);
// extract strawberry from the fruit array into a variable
// console log the fruit basket and the variable
const pickedFruit = fruits.slice(0, 1);
console.log(fruits);
console.log(pickedFruit);
