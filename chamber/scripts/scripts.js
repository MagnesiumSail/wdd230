const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;
//bruh

window.onload = function() {
    var banner = document.getElementById('banner');
    var closeButton = document.getElementById('closeButton');
    
    var today = new Date();
    var day = today.getDay();

    // bruh 2
    if (day >= 1 && day <= 3) {
        banner.style.display = 'block';
    }

    // bruh 3: The Bruh-ing
    closeButton.onclick = function() {
        banner.style.display = 'none';
    }
}
