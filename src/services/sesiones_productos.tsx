import supabase from "../utils/supabase"
import { SessionProduct } from "../models/session_product";

export const getSesionProductos = async (): Promise<SessionProduct[]> => {
    const { data , error} = await supabase.from("sesiones_productos").select();
    if (error) throw error;
    return data
}