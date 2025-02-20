import JoueurController from "@/app/api/controllers/joueurController";
export interface Joueur {
    id: string;
    pseudo: string;
    nom: string;
    prenom: string;
    age: number;
    niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
    created_at: string;
    updated_at: string;
}

// Export the DTOs as named exports
export type CreateJoueurDTO = Omit<Joueur, 'id' | 'created_at' | 'updated_at'>;
export type UpdateJoueurDTO = Partial<CreateJoueurDTO>;

// Create a model object to export as default
const JoueurModel = {
    Joueur: {} as Joueur,
    CreateJoueurDTO: {} as CreateJoueurDTO,
    UpdateJoueurDTO: {} as UpdateJoueurDTO,
};
export default JoueurModel;