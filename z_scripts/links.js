const baseURL = "https://magnesiumsail.github.io/wdd230/";
const linksURL = "https://magnesiumsail.github.io/wdd230/data/links.json";

async function getLinksData() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw new Error("Failed to fetch links json");
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}


function displayLinks(weeks) {
    const ul = document.querySelector(".MIDDLE #l3ft ul");

    ul.innerHTML = "";

    console.log('Weeks data:', weeks);

    weeks.forEach(weekData => {
        console.log('Week data:', weekData);

        const li = document.createElement("li");
        li.textContent = `${weekData.week}: `;
        
        weekData.links.forEach((link, index) => {
            console.log('Link data:', link);

            const a = document.createElement("a");
            a.href = baseURL + link.url;
            a.textContent = link.title;

            li.appendChild(a);

            if (index !== weekData.links.length - 1) {
                li.append(' | ');
            }
        });
        
        ul.appendChild(li);
    });
}





getLinksData();