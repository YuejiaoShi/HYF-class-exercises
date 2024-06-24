document.addEventListener("DOMContentLoaded", refreshClicked);

function refreshClicked() {
  domLoaded();
  const button = document.getElementById("refresh-button");
  const ul = document.getElementById("user-list");
  ul.innerHTML = "";
  button.addEventListener("click", domLoaded);
}
function domLoaded() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((unReadableData) => {
      return unReadableData.json();
    })
    .then((data) => processData(data))
    .catch((e) => console.log(e))
    .finally(() => {
      loading = false;
    }); // finally not very necessary
}
function processData(data) {
  const ul = document.getElementById("user-list");
  ul.innerHTML = "";
  let randomID = [];
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    while (randomID.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 10);
    }
    randomID.push(randomNum);
  }

  randomID.forEach((userID) => {
    const li = document.createElement("li");
    li.innerText = `Name: ${data[userID].name}, 
    Email: ${data[userID].email},
    Website: ${data[userID].website}`;
    ul.appendChild(li);
  });
}
