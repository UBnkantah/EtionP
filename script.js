"use strict";

const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.querySelector(".header");

hamburgerIcon.addEventListener("click", () =>{
header.classList.toggle("active");
});