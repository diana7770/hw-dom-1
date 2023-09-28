//1
const button = document.getElementById(".button");
const text = document.getElementById(".text");
button.addEventListener("click", function () {
  //   button.innerHTML = text.value;
});

//2
const image = document.querySelector(".image");
console.log(image.src);

//3
const link = document.getElementById("myLink");
link.href = "https://www.youtube.com/";
const img = link.getElementsByTagName("img")[0];
img.alt = "Зображення з YouTube";

//4
const list = document.querySelector(".list");
console.log(list);
const firstListItem = list.firstElementChild;
firstListItem = document.createElement("p");
firstListItem = "magic Java Script";
console.log(firstListItem);
