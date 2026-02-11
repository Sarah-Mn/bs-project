export interface RawgGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  description?:string;
  platforms: [
    {platform: {
      name: string;
    };}
  ];
}


