//
// This script is to open the profile page for each user
// and extract its `user_id`. So you need `node`
// with `puppeteer` installed
//

const puppeteer = require("puppeteer");

async function extractUserId(page) {
  return await page.evaluate(() => {
    const img = document.querySelector(
      'img[src^="https://pbs.twimg.com/profile_banners/"]',
    );
    if (img) {
      const src = img.getAttribute("src");
      const match = src.match(/\/profile_banners\/(\d+)\//);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  });
}

async function fetchUserIdFromUsername(browser, username) {
  try {
    const page = await browser.newPage();
    await page.goto(`https://x.com/${username}`, { waitUntil: "networkidle0" });
    const userId = await extractUserId(page);
    await page.close();
    return userId;
  } catch (error) {
    console.error(`Error fetching user ID for ${username}:`, error);
    return null;
  }
}

async function processUsernames(usernames) {
  const browser = await puppeteer.launch();
  const results = [];

  try {
    for (const username of usernames) {
      const userId = await fetchUserIdFromUsername(browser, username);
      results.push({ username, userId });
    }
  } finally {
    await browser.close();
  }

  return results;
}

// Example usage
// pipe the `stdout` to a json file
const usernames = ["_interes1", "1HBK___", "9HHH___"];
processUsernames(usernames)
  .then((results) => console.log(results))
  .catch((error) => console.error("Error processing usernames:", error));
