function extractUserId() {
  // Select the img tag
  const img = document.querySelector('img[src^="https://pbs.twimg.com/profile_banners/"]');
  
  if (img) {
    const src = img.getAttribute('src');
    const match = src.match(/\/profile_banners\/(\d+)\//);
    
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null; // Return null if no match found
}

// Call the function and log the result
const userId = extractUserId();
console.log('User ID:', userId);
