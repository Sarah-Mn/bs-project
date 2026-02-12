import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.RAWG_BASE_URL!;
const API_KEY = process.env.RAWG_API_KEY!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { slug } = req.query;

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ message: "Game slug is required" });
    }

    const params = new URLSearchParams({
      key: API_KEY,
    });

    
    

    const response = await fetch(
      `${BASE_URL}/games/${slug}?${params.toString()}`,
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=60, stale-while-revalidate=120",
        },
      }
    ).catch((error) => {
      console.error("Error fetching game details:", error);
      throw new Error("Failed to fetch game details from RAWG");
    });

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Failed to fetch game details from RAWG",
      });
    }

    const data = await response.json();

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=120"
    );

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
