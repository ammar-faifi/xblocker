import { fetch} from "node-fetch";

async function fetchUserId(username) {
  const response = await fetch("https://ilo.so/twitter-id/get/", {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "X-CSRFToken":
        "IIi72uT6WrA9fhi4JiIB0QesCOHTcj0vrNgOobk5foLtnDWdmgbtFfxClbJuaQjO",
      "Content-Type": "text/plain;charset=UTF-8",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      Priority: "u=0",
    },
    referrer: "https://ilo.so/twitter-id/",
    body: JSON.stringify({ username }),
    method: "POST",
    mode: "cors",
  });

  const data = await response.json();
  return data.user_id;
}

async function fetchUserIds(usernames) {
  const userIds = [];
  for (const username of usernames) {
    try {
      const userId = await fetchUserId(username);
      userIds.push(userId);
      console.log(`Fetched ID for ${username}: ${userId}`);
    } catch (error) {
      console.error(`Error fetching ID for ${username}:`, error);
    }
  }
  return userIds;
}

// Example usage
const usernames = ["user1", "user2", "user3"]; // Replace with your list of usernames
fetchUserIds(usernames)
  .then((ids) => console.log("All user IDs:", ids))
  .catch((error) => console.error("Error:", error));
