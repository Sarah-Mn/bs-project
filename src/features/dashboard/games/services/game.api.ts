

export async function fetchGameBySlug(slug: string) {
    try {
         const res = await fetch(`/api/games/${slug}`);
         
        return res.json();
    } catch (error) {
        console.error("Error in fetchGameBySlug:", error);
          
    }
 
}