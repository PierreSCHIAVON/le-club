
export interface Evenement {
    id_evenement: number;
    nom: string;
    description: string;
    heure_debut: string;
    heure_fin: number;
    type_evenement: string;
    created_at: string;
    updated_at: string;
    id_joueur: number;
}

// Export the DTOs as named exports
export type CreateEvenementDTO = Omit<Evenement, 'id_evenement' | 'created_at' | 'updated_at'>;
export type UpdateEvenementDTO = Partial<CreateEvenementDTO>;

// Create a model object to export as default
const EvenementModel = {
    Evenement: {} as Evenement,
    CreateEvenementDTO: {} as CreateEvenementDTO,
    UpdateEvenementDTO: {} as UpdateEvenementDTO,
};
export default EvenementModel;