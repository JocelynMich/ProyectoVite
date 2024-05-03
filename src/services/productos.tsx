import supabase from "../utils/supabase"
import { Product } from "../models/product";

export const getProductos = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("productos").select();
    if (error) throw error;
    return data
}