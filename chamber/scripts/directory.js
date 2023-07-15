window.onload = function() {
    fetch('https://github.com/MagnesiumSail/wdd230/blob/main/data/members.json')  // replace with your JSON URL
        .then(response => response.json())
        .then(data => {
            let mainSection = document.getElementById('mainSection');

            data.companies.forEach(company => {
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
                mainSection.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
};
