/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const listings = generateListings(37);

// ForEach: Create 37 listings and log out every listings size
listings.forEach((list) => console.log(list.size));

// Map: Create an array that contains all the 37 listing prices.
const ListingsPrices = listings.map((list) => list.price);
console.log(ListingsPrices);

// Filter: Using the 37 listings from the previous tasks
// Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
const cheapListings = listings.filter((list) => list.price < 2000);
console.log(cheapListings);

// Create an array of expensive listings prices. Each item in this array should be of type number
const expensiveListings = listings
  .filter((list) => list.price > 8000)
  .map((list) => list.price);
console.log(expensiveListings);

// Create an array of listings that have parking. Each item in this array should be of type object
const listingsWithParking = listings.filter((list) =>
  list.facilities.includes("Parkering")
);
console.log(listingsWithParking);
