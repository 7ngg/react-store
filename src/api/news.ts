import axios, { AxiosError, AxiosResponse } from "axios";
import { News } from "../Entities/news";

export async function fetchNews(): Promise<News[]> {
  try {
    const response = await axios.get("data/news_data.json");
    const news = response.data as News[];
    return news;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log("Error fetching news:", e);
      throw e;
    }

    throw new Error("Unexpected error");
  }
}
