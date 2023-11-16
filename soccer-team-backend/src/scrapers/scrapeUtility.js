import axios from "axios";
import cheerio from "cheerio";

export default async function scrapeData(url, selector, dataExtractor) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const scrapedData = [];

    $(selector).each((index, element) => {
      const rowData = dataExtractor($(element));
      if (rowData) {
        scrapedData.push(rowData);
      }
    });

    return scrapedData;
  } catch (error) {
    console.error("Error scraping data:", error);
    return { error: "Failed to scrape data" };
  }
}
