export interface Joueur {
    id: string;
    pseudo: string;
    nom: string;
    prenom: string;
    age: number;
    niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
    email: string;
    avatar_url?: string;
    created_at: string;
    updated_at: string;
}

export type CreateJoueurDTO = Omit<Joueur, 'id' | 'created_at' | 'updated_at'>;
export type UpdateJoueurDTO = Partial<CreateJoueurDTO>;