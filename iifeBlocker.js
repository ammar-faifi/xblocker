(async () => {
  const waitSeconds = 1; // Delay between blocking actions (in seconds)

  const userIdsToBlock = [
    "1761800633500188672",
    "1234567890123456789",
    "9876543210987654321",
  ];

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
      }, 1000);
    }, 4000);
  };

  // Function to block a single user
  async function blockUser(userId) {
    const url = "https://x.com/i/api/1.1/blocks/create.json";
    const headers = {
      // copy it from your browser after doing a block request
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
    logMessage("Finished blocking all users.");
  }

  // Run the script
  await blockAllUsers();
})();
