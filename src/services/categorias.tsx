import supabase from "../utils/supabase"
import { Category } from "../models/category";

export const getCategorias = async (): Promise<Category[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) throw error;
    return data
}