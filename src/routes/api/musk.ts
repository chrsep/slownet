import type { RequestHandler } from "@sveltejs/kit"
import { recentSearch } from "$lib/twitter"

export const get: RequestHandler = async ({ params }) => {
  const tweets = await recentSearch()

  return {
    body: {
      tweets
    }
  }
}
