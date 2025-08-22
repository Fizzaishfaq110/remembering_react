import axios from "axios";
import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
} //not getting data immedietely so async

//For a single product we would remove the array of Product[] amd we add the parameter and its type of id: number
export const getProduct = async (id: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}