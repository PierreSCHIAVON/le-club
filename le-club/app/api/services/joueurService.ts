import { supabase } from '@/app/lib/supabase';
import { Joueur, CreateJoueurDTO, UpdateJoueurDTO } from '../models/Joueur';
import {GetResult} from "@supabase/postgrest-js/src/select-query-parser/result";

export const getJoueurs = async (): Promise<GetResult<any, any, "joueurs", unknown, "*">[] | null> => {
    const { data, error } = await supabase.from('joueurs').select('*');
    if (error) throw error;
    return data;
};

export const createJoueur = async (joueur: CreateJoueurDTO): Promise<Joueur> => {
    const { data, error } = await supabase.from('joueurs').insert(joueur).single();
    if (error) throw error;
    return data;
};

export const updateJoueur = async (id: string, updates: UpdateJoueurDTO): Promise<Joueur> => {
    const { data, error } = await supabase.from('joueurs').update(updates).eq('id', id).single();
    if (error) throw error;
    return data;
};

export const deleteJoueur = async (id: string): Promise<void> => {
    const { error } = await supabase.from('joueurs').delete().eq('id', id);
    if (error) throw error;
};

// Create a default export object that includes all functions
const joueurService = {
    getJoueurs,
    createJoueur,
    updateJoueur,
    deleteJoueur
};

export default joueurService;