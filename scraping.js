import { launch } from "puppeteer";

const url =
	"https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-20576.html";

async function scrapeData() {
	try {
		const browser = await launch({ headless: "new" });

		const page = await browser.newPage();

		await page.goto(url);

		const data = await page.$$eval(".listing-product .dsp-cell-right", (elements) =>
			elements.map((el) => ({
				title: el.querySelector(".pdt-desc a").textContent,
				price: el.querySelector(".price").textContent,
			}))
		);
		console.log(data);

		await browser.close();

		return data;
	} catch (error) {
		console.error(error);
	}
}

scrapeData();

export default scrapeData();
