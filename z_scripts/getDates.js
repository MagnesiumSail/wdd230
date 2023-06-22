const options = {year: 'numeric' };
const today1 = document.querySelector('#today1');
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const nav = document.querySelector("nav"); // Updated variable name
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        // Dark mode
        header.style.background = "#333";
        header.style.color = "#fff";
        main.style.background = "#000";
        main.style.color = "#fff";
        nav.style.background = "#333"; // Updated variable name
        nav.style.color = "#fff"; // Updated variable name
        footer.style.background = "#333";
        footer.style.color = "#fff";
        cards.forEach(card => {
            card.style.background = "#444";
            card.style.color = "#fff";
        });
        modeButton.textContent = "❎";
    } else {
        // Light mode
        header.style.background = "#63c697";
        header.style.color = "#000";
        main.style.background = "#eee";
        main.style.color = "#000";
        nav.style.background = "#333"; // Updated variable name
        nav.style.color = "#fff"; // Updated variable name
        footer.style.background = "blanchedalmond";
        footer.style.color = "#000";
        cards.forEach(card => {
            card.style.background = "bisque";
            card.style.color = "#000";
        });
        modeButton.textContent = "☑️";
    }
});

const visitSelect = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitSelect.textContent = numVisits
} else {
    visitSelect.textContent = 'This is your first visit. Welcome!';
}

numVisits++;
localStorage.setItem("numVisits-ls" , numVisits);