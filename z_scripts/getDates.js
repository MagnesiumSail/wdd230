const options = {year: 'numeric' };
const today1 = document.querySelector('#today1');
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;
