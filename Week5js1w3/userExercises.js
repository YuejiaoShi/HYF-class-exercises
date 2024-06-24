const user1 = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};

// Logic
const users = [user1, user2];
const keysToLog = ["name", "hobbies"];
let userInfo = [];
let userMessage = "";

for (let user of users) {
  let eachUserInfo = [];
  for (let keyToLog of keysToLog) {
    let value = user[keyToLog];
    if (typeof value === "object") {
      let objString = "";
      for (let prop in value) {
        objString += `${prop}: ${value[prop]}, `;
      }
      eachUserInfo.push(user[keyToLog]);
      userMessage += `${keyToLog} is ${objString}; `;
    } else {
      eachUserInfo.push(user[keyToLog]);
      userMessage += `${keyToLog} is ${user[keyToLog]}; `;
    }
  }
  userInfo.push(eachUserInfo);
}

// Rendering
console.log(userInfo);
console.log(userMessage);
