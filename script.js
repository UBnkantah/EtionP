"use strict";

const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.querySelector(".header");

let comingSoonh1 = document.querySelector(".pre-com-soon .coming-soon h1");
let comingSoonText = document.querySelector(".pre-com-soon .coming-soon .subtitle")

// good.addEventListener("click", () => {
//     alert("good");
// } )

let head = "COMING SOON";
let text = "JOIN OUR WAITING LIST"
let index = 0;
let main = 0;

// Typewriting effect
const typeWriter = setInterval(() => {
	comingSoonh1.textContent += head[index];
	index += 1;
	
	if (index > head.length -1){
		clearInterval(typeWriter);
	} 

}, 300);

let typeWriters = setInterval(() => {
	comingSoonText.textContent += text[main];
	main += 1;

	if (main > text.length -1){
		clearInterval(typeWriters);
	}

}, 300);

hamburgerIcon.addEventListener("click", () =>{
header.classList.toggle("active");
});