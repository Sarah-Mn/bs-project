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
  platforms: { 
    platform: {
      id: number;
      name: string;
    };
    requirements?: {
        minimum: string;
        recommended?: string;
    }}[];
  esrb_rating?: {
    id: number,
    name: string;
    slug: string;
  };
  genres?: {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
  }[];
  developers?:{
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
    }[];
  stores?: {
        id: number;
        store: {
            id: number;
            name: string;
            slug: string;
            games_count: number;
            image_background: string;
            domain: string;
        }
        url: string;
    }[];
    website?: string;
    

}


