// Function
// Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?
// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.
// Try call the function and check with google if the function returns the right value.

function getCircleArea(radius) {
  const circleArea = Math.PI * radius * radius;
  return circleArea;
}
console.log(getCircleArea(2));

function celciusToFahreneit(celcius) {
  const fahrenheit = (celcius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celciusToFahreneit(1));
