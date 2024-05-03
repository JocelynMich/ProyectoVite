import supabase from "../utils/supabase"
import { Session } from "../models/session";


export const getSesiones = async (): Promise<Session[]> => {
    const { data , error} = await supabase.from("sesiones").select();
    if (error) throw error;
    return data
}