import scrapeData from "./scrapeUtility.js";
import { getCache, setCache } from "../../utils/inMemoryCache.js";

export default async function scrapeSchedule() {
  const url = "https://www.gssl.org/schedule/479844/sun-open-d2";
  const selector =
    "#ctl00_ContentPlaceHolder1_StandingsResultsControl_ScheduleGrid_ctl00 tr.rgRow";
  const cacheKey = `schedule-${url}`;
  const ttl = 1000 * 60 * 60; // Cache TTL of 1 hour

  const cachedData = getCache(cacheKey, ttl);
  if (cachedData) {
    return { schedule: cachedData };
  }

  const dataExtractor = ($row) => {
    const $tds = $row.find("td");

    if ($tds.length === 0) {
      return null; // Skip rows with no data
    }

    const $locationCell = $tds.eq(4);
    const $locationAnchor = $locationCell.find("a");
    const locationText = $locationAnchor.text().trim();
    const locationHref = $locationAnchor.attr("href");

    return {
      date: $tds.eq(0).text().trim(),
      time: $tds.eq(1).text().trim(),
      homeTeam: $tds.eq(2).text().trim(),
      awayTeam: $tds.eq(3).text().trim(),
      location: {
        text: locationText,
        href: locationHref,
      },
    };
  };

  try {
    const scrapedData = await scrapeData(url, selector, dataExtractor);

    // Create a JSON object with the scraped data
    const jsonData = {
      schedule: scrapedData,
    };
    // Cache the scraped data
    setCache(cacheKey, scrapedData);

    return jsonData;
  } catch (error) {
    console.error("Error scraping schedule:", error);
    return { error: "Failed to scrape schedule" };
  }
}
