(async () => {
  // Delay between blocking actions (in seconds)
  const waitSeconds = 1;

  const userIdsToBlock = ["1761800633500188672", "1578074394827554817"];

  const createVisualLog = () => {
    let log = document.getElementById("visual-log");
    if (log) {
      return log;
    }
    log = document.createElement("div");
    log.id = "visual-log";
    log.style.position = "fixed";
    log.style.bottom = "0";
    log.style.left = "0";
    log.style.zIndex = "9999";
    log.style.backgroundColor = "black";
    log.style.border = "1px solid white";
    log.style.padding = "1em";
    log.style.margin = "1em";
    log.style.maxHeight = "50vh";
    log.style.maxWidth = "50vw";
    log.style.overflowY = "scroll";
    log.style.fontFamily = "monospace";
    document.body.appendChild(log);
    return log;
  };

  const log = createVisualLog();

  const logMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.style.opacity = "1";
    messageElement.style.transition = "opacity 1s";
    messageElement.style.marginBottom = "0.5em";
    messageElement.style.color = "white";
    log.appendChild(messageElement);
    setTimeout(() => {
      messageElement.style.opacity = "0";
      setTimeout(() => {
        log.removeChild(messageElement);
      }, 800);
    }, 4000);
  };

  // Function to get CSRF token
  function getCsrfToken() {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("ct0="))
      .split("=")[1];
  }

  // Function to block a single user
  async function blockUser(userId) {
    const url = "https://x.com/i/api/1.1/blocks/create.json";
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded",
      "x-twitter-auth-type": "OAuth2Session",
      "x-csrf-token": getCsrfToken(),
      "x-twitter-client-language": "en",
      "x-twitter-active-user": "yes",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: `user_id=${userId}`,
        credentials: "include",
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      logMessage(`Successfully blocked user ${userId}`);
      return data;
    } catch (error) {
      logMessage(`Error blocking user ${userId}: ${error.message}`);
      return null;
    }
  }

  // Function to block all users in the array
  async function blockAllUsers() {
    for (const userId of userIdsToBlock) {
      await blockUser(userId);
      await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
    }
    logMessage("Done.");
  }

  // Run the script
  await blockAllUsers();
})();
