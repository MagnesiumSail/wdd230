let mainSection = document.getElementById('mainSection');
let toggleButton = document.getElementById('toggleButton');

//
fetchData('/data/members.json')
    .then(data => createCards(data, mainSection));

toggleButton.addEventListener('click', function() {
    toggleView(mainSection);
});

//Grabs and makes sure data is good.
async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

//Fixes up the card and assigns all the response
function createCard(company) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${company.image}" alt="${company.name}">
        <div class="container">
            <h2>${company.name}</h2>
            <p><b>Address:</b> ${company.address}</p>
            <p><b>Phone:</b> ${company.phone}</p>
            <p><b>Website:</b> <a href="${company.website}">${company.website}</a></p>
            <p><b>Membership Level:</b> ${company.membershipLevel}</p>
            <p><b>Additional Info:</b> ${company.additionalInfo}</p>
        </div>
    `;
    return card;
}

//Actually puts the cards on the page
function createCards(data, containerElement) {
    data.companies.forEach(company => {
        let card = createCard(company);
        containerElement.appendChild(card);
    });
}

//toggle button
function toggleView(element) {
    element.classList.toggle('grid-view');
}

