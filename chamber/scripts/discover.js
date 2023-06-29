const theToday = new Date();
const todayElement = document.querySelector("#today");
const now = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
var timeDifference = now - lastVisit;
var daysAgo = Math.round(timeDifference / 86400000);



if (lastVisit !== 0)
{
    if (timeDifference < 84600000)
    {
        todayElement.textContent = 'Back so soon! Awesome!'
    }
    else if (timeDifference < 169200000)
    {
        todayElement.textContent = 'You last visited 1 day ago.'
    }
    else
    {
        todayElement.textContent = 'You last visited ' + daysAgo + ' days ago.';
    }
} else
{
    todayElement.textContent = 'Welcome! Let us know if you have any questions.';
}

localStorage.setItem("lastVisit-ls" , now);