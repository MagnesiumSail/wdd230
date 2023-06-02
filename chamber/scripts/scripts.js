const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;