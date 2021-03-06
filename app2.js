const imgClick1 = document.getElementById("1");
const imgClick2 = document.getElementById("2");
const imgClick3 = document.getElementById("3");
const imgClick4 = document.getElementById("4");
const imgClick5 = document.getElementById("5");

const overlay = document.getElementById("overlay");
const img = document.querySelector(".before");
const imgContainer = document.querySelector(".img-container");

imgClick1.addEventListener("click", modal1);
imgClick2.addEventListener("click", modal2);
imgClick3.addEventListener("click", modal3);
imgClick4.addEventListener("click", modal4);
imgClick5.addEventListener("click", modal5);

function modal1() {
  overlay.classList.toggle("overlay");
  const image = document.createElement("IMG");
  const boton = document.createElement("BUTTON");
  boton.innerHTML = "<i class='fas fa-times'></i>";
  image.src = "images/bottles/1.jpeg";
  boton.classList.toggle("button-img");
  image.classList.toggle("img");
  imgContainer.appendChild(boton);
  imgContainer.appendChild(image);

  boton.addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    boton.classList.toggle("button-img");
    image.classList.toggle("img");
    imgContainer.removeChild(image);
    imgContainer.removeChild(boton);
  });
}

function modal2() {
  overlay.classList.toggle("overlay");
  const image = document.createElement("IMG");
  const boton = document.createElement("BUTTON");
  boton.innerHTML = "<i class='fas fa-times'></i>";
  image.src = "images/bottles/2.jpeg";
  boton.classList.toggle("button-img");
  image.classList.toggle("img");
  imgContainer.appendChild(boton);
  imgContainer.appendChild(image);

  boton.addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    boton.classList.toggle("button-img");
    image.classList.toggle("img");
    imgContainer.removeChild(image);
    imgContainer.removeChild(boton);
  });
}

function modal3() {
  overlay.classList.toggle("overlay");
  const image = document.createElement("IMG");
  const boton = document.createElement("BUTTON");
  boton.innerHTML = "<i class='fas fa-times'></i>";
  image.src = "images/bottles/3.jpeg";
  boton.classList.toggle("button-img");
  image.classList.toggle("img");
  imgContainer.appendChild(boton);
  imgContainer.appendChild(image);

  boton.addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    boton.classList.toggle("button-img");
    image.classList.toggle("img");
    imgContainer.removeChild(image);
    imgContainer.removeChild(boton);
  });
}

function modal4() {
  overlay.classList.toggle("overlay");
  const image = document.createElement("IMG");
  const boton = document.createElement("BUTTON");
  boton.innerHTML = "<i class='fas fa-times'></i>";
  image.src = "images/bottles/4.jpeg";
  boton.classList.toggle("button-img");
  image.classList.toggle("img");
  imgContainer.appendChild(boton);
  imgContainer.appendChild(image);

  boton.addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    boton.classList.toggle("button-img");
    image.classList.toggle("img");
    imgContainer.removeChild(image);
    imgContainer.removeChild(boton);
  });
}

function modal5() {
  overlay.classList.toggle("overlay");
  const image = document.createElement("IMG");
  const boton = document.createElement("BUTTON");
  boton.innerHTML = "<i class='fas fa-times'></i>";
  image.src = "images/bottles/5.jpeg";
  boton.classList.toggle("button-img");
  image.classList.toggle("img");
  imgContainer.appendChild(boton);
  imgContainer.appendChild(image);

  boton.addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    boton.classList.toggle("button-img");
    image.classList.toggle("img");
    imgContainer.removeChild(image);
    imgContainer.removeChild(boton);
  });
}
