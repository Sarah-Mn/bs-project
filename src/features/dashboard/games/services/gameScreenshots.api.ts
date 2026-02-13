

export async function fetchGameScreenshots(slug: string) {
  try {
    const res = await fetch(`/api/games/${slug}/screenshots`);

    if (!res.ok) {
      throw new Error("Failed to fetch screenshots");
    }

    return res.json();
  } catch (error) {
    console.error("Error in fetchGameScreenshots:", error);
    throw error;
  }
}