document.addEventListener("DOMContentLoaded", domLoad);

function domLoad() {
  fetch("https://jsonplaceholder.typicode.com/photos")
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
  const divAllImages = document.getElementById("images");

  data.forEach((img) => {
    let anchor = document.createElement("a");
    anchor.href = img.url;

    let figureImg = document.createElement("figure");
    const imgElem = document.createElement("img");
    let figCaption = document.createElement("figcaption");
    imgElem.src = img.thumbnailUrl;
    imgElem.alt = img.title;
    figCaption.innerText = img.title;

    figureImg.appendChild(imgElem);
    figureImg.appendChild(figCaption);

    anchor.appendChild(figureImg);
    divAllImages.appendChild(anchor);
  });
}
