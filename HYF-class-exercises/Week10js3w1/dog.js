document.addEventListener("DOMContentLoaded", domLoad);

// function getImgEvery2S() {
//   setInterval(domLoad, 2000);
// }

function domLoad() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((unReadableData) => {
      return unReadableData.json();
    })
    .then((data) => processData(data))
    .catch((e) => console.log(e))
    .finally(() => {
      loading = false;
    });
}

function processData(data) {
  const breeds = Object.keys(data.message);
  const divDogImg = document.getElementById("dog-img");
  divDogImg.innerHTML = "";

  const randomNum = Math.floor(Math.random() * breeds.length);
  const randomBreed = breeds[randomNum];
  fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
    .then((unReadableData) => {
      return unReadableData.json();
    })
    .then((data2) => {
      const breedImg = document.createElement("img");
      const breedCaption = document.createElement("figcaption");

      breedImg.src = data2.message;
      breedCaption.innerText = randomBreed;

      const figure = document.createElement("figure");
      figure.appendChild(breedImg);
      figure.appendChild(breedCaption);

      divDogImg.appendChild(figure);
    })
    .catch((e) => console.log(e));
}
