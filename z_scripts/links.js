const baseURL = "https://magnesiumsail.github.io/wdd230/";
const linksURL = "https://magnesiumsail.github.io/wdd230/data/links.json";

async function getLinksData() {
    try {
        const response = await(linksURL);
        if (response.ok)
        {
            const data = response.json
            console.log(data);
        }
        else
        {
            throw new Error("Failed to fetch links json")
        }
    } catch (error) {
        console.log("Error: " , error.message);
    }
}
getLinksData();