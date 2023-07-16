const companySpotlightsSection = document.querySelector("#company-spotlights");

fetch('https://magnesiumsail.github.io/wdd230/data/members.json')
  .then(response => response.json())
  .then(data => {
    console.log('Received data:', data);  // Add this line to see the structure of the data.

    const companies = data.companies;

    if (!Array.isArray(companies)) {
      console.error('Expected an array of companies, but got:', companies);
      return;
    }

    // Filter companies with "Gold" or "Silver" membership levels.
    const spotlightCompanies = companies.filter(company => 
      company.membershipLevel === "Gold" || company.membershipLevel === "Silver"
    );

    // Select first three companies to spotlight.
    for (let i = 0; i < 3 && i < spotlightCompanies.length; i++) {
      const company = spotlightCompanies[i];

      // Create HTML for this company.
      const companyHTML = `
          <div class="company-spotlight">
              <img src="${company.image}" alt="${company.name} logo">
              <h3>${company.name}</h3>
              <p>${company.additionalInfo}</p>
              <p><strong>Address:</strong> ${company.address}</p>
              <p><strong>Phone:</strong> ${company.phone}</p>
              <p><a href="http://${company.website}">Visit our website</a></p>
          </div>
      `;

      // Append this HTML to the company spotlights section.
      companySpotlightsSection.innerHTML += companyHTML;
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
