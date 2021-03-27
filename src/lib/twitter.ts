import fetch from "node-fetch"

export const recentSearch = async () => {
  const response = await fetch(
    "https://api.twitter.com/2/tweets/search/recent?query=from:elonmusk",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TWITTER_BEARER_TOKEN}`,
      },
    }
  ).then((response) => response.json())

  return response.data
}
