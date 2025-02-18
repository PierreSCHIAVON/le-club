import { Joueur, CreateJoueurDTO, UpdateJoueurDTO } from '../models/Joueur';
import { supabase } from '../../lib/supabase';

export class JoueurController {
    static async getAllJoueurs(): Promise<Joueur[]> {
        try {
            const { data, error } = await supabase
                .from('joueurs')
                .select('*');

            if (error) throw error;
            return data as Joueur[];
        } catch (error) {
            console.error('Erreur lors de la récupération des joueurs:', error);
            throw error;
        }
    }

    static async getJoueurById(id: string): Promise<Joueur | null> {
        try {
            const { data, error } = await supabase
                .from('joueurs')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data as Joueur;
        } catch (error) {
            console.error(`Erreur lors de la récupération du joueur avec l'ID ${id}:`, error);
            throw error;
        }
    }

    static async createJoueur(joueurData: CreateJoueurDTO): Promise<Joueur> {
        try {
            const { data, error } = await supabase
                .from('joueurs')
                .insert(joueurData)
                .single();

            if (error) throw error;
            return data as Joueur;
        } catch (error) {
            console.error('Erreur lors de la création du joueur:', error);
            throw error;
        }
    }

    static async updateJoueur(id: string, joueurData: UpdateJoueurDTO): Promise<Joueur> {
        try {
            const { data, error } = await supabase
                .from('joueurs')
                .update(joueurData)
                .eq('id', id)
                .single();

            if (error) throw error;
            return data as Joueur;
        } catch (error) {
            console.error(`Erreur lors de la mise à jour du joueur avec l'ID ${id}:`, error);
            throw error;
        }
    }

    static async deleteJoueur(id: string): Promise<void> {
        try {
            const { error } = await supabase
                .from('joueurs')
                .delete()
                .eq('id', id);

            if (error) throw error;
        } catch (error) {
            console.error(`Erreur lors de la suppression du joueur avec l'ID ${id}:`, error);
            throw error;
        }
    }
}