import supabase from "../utils/supabase"
import { Gender } from "../models/gender";


export const getGenero = async (): Promise<Gender[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) throw error;
    else{
        console.log ("Gender:", data);
    }
   return data || []; 
}

export const createGenero = async (genero: Gender): Promise<void> => {
    const { error} = await supabase.from("genero").insert(genero);
    if (error) throw error;
  }