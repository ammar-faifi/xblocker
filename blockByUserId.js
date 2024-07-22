const userIdsToBlock = [
  '1761800633500188672',
  '1234567890123456789',
  '9876543210987654321'
];

// Function to block a single user
async function blockUser(userId) {
  const url = "https://x.com/i/api/1.1/blocks/create.json";
  const headers = {
    // copy it from your broswer after doing
    // block request
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: `user_id=${userId}`,
      credentials: "include",
      mode: "cors"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Successfully blocked user ${userId}:`, data);
    return data;
  } catch (error) {
    console.error(`Error blocking user ${userId}:`, error);
    return null;
  }
}

// Function to block all users in the array
async function blockAllUsers() {
  for (const userId of userIdsToBlock) {
    await blockUser(userId);
    // Add a delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  console.log('Finished blocking all users.');
}

// Run the script
blockAllUsers();
