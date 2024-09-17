// Import required libraries
const axios = require("axios");
require('dotenv').config();

// Function to post a feed on Facebook
async function postFeedOnFacebook() {
  const facebookUrl = `https://graph.facebook.com/${process.env.FACEBOOK_PAGE_ID}/feed`; // URL for posting a feed
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN; // Facebook access token from environment variables

  const message = "I love programming <3"; // Message to post on the feed
  const data = {
    message,
    access_token: accessToken,
  };

  try {
    // Attempt to post the feed on Facebook
    const response = await axios.post(facebookUrl, data);
    console.log("Successfully posted on Facebook:", response.data);
    return response.data;
  } catch (error) {
    // Log and rethrow any errors
    console.error("Error posting to Facebook:", error.response?.data || error.message);
    throw error;
  }
}

// Call the function to post on Facebook
postFeedOnFacebook();

