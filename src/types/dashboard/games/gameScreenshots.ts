export interface GameScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface GameScreenshotsResponse {
  count: number;
  results: GameScreenshot[];
}
