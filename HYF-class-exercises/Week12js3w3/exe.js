// https://pourya.gitbook.io/javascript-3/week-3
// Challenge 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.introduce();
  }
  introduce() {
    console.log(
      `"Hello, my name is ${this.name} and I am ${this.age} years old."    `
    );
  }
}
const amy = new Person("Amy", 15);
// console.log(amy);

// Challenge 2
class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(num) {
    this.balance += num;
  }

  withdraw(num) {
    if (num > this.balance) {
      console.log("You don't have enough money :(");
    } else {
      this.balance -= num;
    }
  }

  getBalance() {
    console.log(`You have $${this.balance} in your account.`);
  }
}
const myBank = new BankAccount("12345", "Amy", 800);
myBank.deposit(50);
myBank.withdraw(10);
myBank.getBalance();

// Challenge 3
class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalAmount = 0;
  }
  addItem(item) {
    if (item.name && item.price && item.quantity) {
      this.items.push(item);
    } else {
      console.log("input the item in valid format.");
    }
  }
  getTotalCart() {
    console.log("What you have in cart: ");
    this.items.forEach((item) => {
      this.totalAmount += item.price * item.quantity;
      console.log(
        `Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`
      );
    });
    console.log(`Total amount is $${this.totalAmount}.`);
  }
  removeItem(itemName) {
    // const names = this.items.map((item) => item.name);
    // if (names.includes(itemName)) {
    //   const index = names.indexOf(itemName);
    //   console.log(index);
    // }
    this.items = this.items.filter((item) => item.name !== itemName);
  }
  checkOut() {
    this.items = [];
    this.totalAmount = 0;
    console.log("You've successfully checkout.");
  }
}

// Example Usage
const myCart = new ShoppingCart();
myCart.addItem({
  name: "milk",
  price: 100,
  quantity: 1,
});

myCart.addItem({
  name: "juice",
  price: 20,
  quantity: 2,
});

myCart.getTotalCart();
myCart.removeItem("milk");
myCart.checkOut();
