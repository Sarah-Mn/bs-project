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
    const { query } = req;

    const page = (query.page as string) ?? "1";
    const pageSize = (query.page_size as string) ?? "20";
    const genres = query.genres as string | undefined;
    const platforms = query.platforms as string | undefined;
    const tags = query.tags as string | undefined;
    const dates = query.dates as string | undefined;
    const ordering = query.ordering as string | undefined;
    const search = query.search as string | undefined;

    const params = new URLSearchParams({
      key: API_KEY,
      page,
      page_size: pageSize,
      ...(genres && { genres }),
      ...(platforms && { platforms }),
      ...(tags && { tags }),
      ...(dates && { dates }),
      ...(ordering && { ordering }),
      ...(search && { search }),
    });

    const response = await fetch(`${BASE_URL}/games?${params.toString()}`, {
      
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Failed to fetch games from RAWG",
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