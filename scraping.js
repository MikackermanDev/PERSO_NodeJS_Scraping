// Importer les modules
const axios = require("axios");
const cheerio = require("cheerio");

// Définir l'URL de la page à scraper
const url =
	"https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-20576.html";

// Créer une fonction asynchrone pour scraper les prix
async function scrapePrices() {
	try {
		// Faire la requête HTTP et obtenir le HTML
		const response = await axios.get(url);
		const html = response.data;

		// Charger le HTML avec cheerio
		const $ = cheerio.load(html);

		// Créer un tableau vide pour stocker les prix
		const prices = [];

		// Sélectionner les éléments qui contiennent les prix avec un sélecteur CSS
		$(".price").each((index, element) => {
			// Extraire le texte de l'élément
			const price = $(element).text();
			// Ajouter le prix au tableau
			prices.push(price);
		});

		// Afficher les résultats dans la console
		console.log(prices);
	} catch (error) {
		// Afficher l'erreur dans la console
		console.error(error);
	}
}

// Appeler la fonction pour scraper les prix
scrapePrices();
