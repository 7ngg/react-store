import axios, { AxiosError } from "axios";
import { Product } from "../Entities/product";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get("data/products.json");
    const products = response.data as Product[];
    return products;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log("Error fetching products:", e);
      throw e;
    }

    throw new Error("Unexpected error");
  }
}
