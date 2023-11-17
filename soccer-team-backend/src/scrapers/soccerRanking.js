import scrapeData from "./scrapeUtility.js";

export default async function scrapeRankings() {
  const url = "https://www.gssl.org/schedule/479844/sun-open-d2";
  const selector = "table.rgMasterTable tbody tr";
  const dataExtractor = (row) => {
    const tds = row.querySelectorAll("td");
    if (tds.length === 0) {
      return null; // Skip rows with no data
    }
    return {
      teamName: tds[0].textContent.trim(),
      gamesPlayed: tds[1].textContent.trim(),
      wins: tds[2].textContent.trim(),
      losses: tds[3].textContent.trim(),
      ties: tds[4].textContent.trim(),
      goalsFor: tds[5].textContent.trim(),
      goalsAgainst: tds[6].textContent.trim(),
      goalDifferential: tds[7].textContent.trim(),
      points: tds[8].textContent.trim(),
      manager: tds[9].textContent.trim(),
    };
  };

  const scrapedData = await scrapeData(url, selector, dataExtractor);

  // Create a JSON object with the scraped data
  const jsonData = {
    rankings: scrapedData,
  };

  return jsonData;
}
