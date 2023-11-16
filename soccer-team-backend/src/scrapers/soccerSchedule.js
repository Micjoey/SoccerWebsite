import axios from "axios";
import cheerio from "cheerio";

async function scrapeData() {
  try {
    const { data } = await axios.get(
      "https://www.gssl.org/schedule/479844/sun-open-d2"
    );
    const $ = cheerio.load(data);
    const scrapedData = [];

    // Assuming the schedule is within a table and each game is a row in the table
    $("table tbody tr").each((index, element) => {
      // Extract columns from each row
      const tds = $(element).find("td");
      const game = {
        date: $(tds[0]).text(),
        time: $(tds[1]).text(),
        homeTeam: $(tds[2]).text(),
        awayTeam: $(tds[3]).text(),
        location: $(tds[4]).text(),
        // Add more columns as necessary based on the actual table structure
      };
      scrapedData.push(game);
    });
    
    return scrapedData;
  } catch (error) {
    console.error("Error scraping data:", error);
    return [];
  }
}

export default scrapeData;
