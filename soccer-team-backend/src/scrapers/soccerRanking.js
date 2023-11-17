import scrapeData from "./scrapeUtility.js";

export default async function scrapeRankings() {
  const url = "https://www.gssl.org/schedule/479844/sun-open-d2";
  const selector =
    "#ctl00_ContentPlaceHolder1_StandingsResultsControl_standingsGrid_ctl00 tr";
  const dataExtractor = ($row) => {
    // Using Cheerio's methods instead of querySelectorAll
    const $tds = $row.find("td");
    if ($tds.length === 0) {
      return null; // Skip rows with no data
    }
    return {
      teamName: $tds.eq(0).text().trim(),
      gamesPlayed: $tds.eq(1).text().trim(),
      wins: $tds.eq(2).text().trim(),
      losses: $tds.eq(3).text().trim(),
      ties: $tds.eq(4).text().trim(),
      goalsFor: $tds.eq(5).text().trim(),
      goalsAgainst: $tds.eq(6).text().trim(),
      goalDifferential: $tds.eq(7).text().trim(),
      points: $tds.eq(8).text().trim(),
      manager: $tds.eq(9).text().trim(),
    };
  };

  const scrapedData = await scrapeData(url, selector, dataExtractor);

  // Create a JSON object with the scraped data
  const jsonData = {
    rankings: scrapedData,
  };

  return jsonData;
}
