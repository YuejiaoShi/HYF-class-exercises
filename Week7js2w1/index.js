window.addEventListener("DOMContentLoaded", () => {
  createFavouriteDishes();
  createPodcast();
  imageInserter(
    "https://picsum.photos/536/353",
    document.querySelector("body")
  );
});

function createFavouriteDishes() {
  const title = window.document.getElementsByTagName("title");
  console.log(title);
  const ul = document.querySelector("ul");
  console.log("query selector", ul);
  console.log("tag", document.getElementsByTagName("ul"));
  console.log("id", document.getElementById("dishes1"));
  console.log("class", document.getElementsByClassName("dishes"));

  const dishes = ["Pasta", "sushi", "dumplings", "burger", "kebab"];
  for (let dish of dishes) {
    console.log(dish);
    //const li = `<li>${dish}</li>`; // -- this creates a string
    // console.log(li);
    const li = document.createElement("li");
    li.innerText = dish;
    ul.appendChild(li);
  }
}

function createPodcast() {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  if (!ul) {
    console.error('Element with id "podcast" not found.');
  } else {
    for (let podcast of podcasts) {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");

      if (podcast.imageUrl) {
        const img = document.createElement("img");
        img.src = podcast.imageUrl;
        li.appendChild(img);
      }
      h1.innerHTML = podcast.name;
      li.appendChild(h1);
      ul.appendChild(li);
    }
  }
}

function imageInserter(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  const el = elementToAppendImageTo;
  el.appendChild(img);
}

const btn = document.getElementById("btn");
let isClicked = false;
btn.addEventListener("click", () => {
  isClicked
    ? ((btn.innerText = "Button clicked"),
      (isClicked = !isClicked),
      (btn.style.backgroundColor = "green"))
    : ((btn.innerText = "Click me"),
      (isClicked = !isClicked),
      (btn.style.backgroundColor = "red"));
});
