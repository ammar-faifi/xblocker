function fetchUserId(username) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ilo.so/twitter-id/get/", true);
    xhr.setRequestHeader(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
    );
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
    // Copy it from your console Network tab
    xhr.setRequestHeader("X-CSRFToken", "");
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.withCredentials = true;

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        resolve(data.user_id);
      } else {
        reject(new Error(`HTTP error! status: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error"));
    };

    xhr.send(JSON.stringify({ username }));
  });
}

async function fetchUserIds(usernames) {
  const userIds = [];
  for (const username of usernames) {
    try {
      const userId = await fetchUserId(username);
      userIds.push({ username, userId });
      console.log(`Fetched ID for ${username}: ${userId}`);
    } catch (error) {
      console.error(`Error fetching ID for ${username}:`, error);
      userIds.push({ username, userId: null });
    }
  }
  return userIds;
}

function main() {
  const usernames = ["user1", "user2", "user3"]; // Replace with your list of usernames

  console.log("Starting to fetch user IDs...");
  fetchUserIds(usernames)
    .then((results) => {
      console.log("All results:", results);

      const userIdsOnly = results
        .map((result) => result.userId)
        .filter((id) => id !== null);
      console.log("All user IDs:", userIdsOnly);
    })
    .catch((error) => console.error("Error in main execution:", error));
}

// Run the main function
main();
