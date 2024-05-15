export interface Category {
    ID_Categoria: number;
    Nombre: string;
    fechacreacion: Date;
    fk_CreadoPor?: number | null;
    fechaactualizacion?: Date| null;
    fk_ActualizadoPor?: number| null;
    fechaeliminacion?: Date | null;
    fk_EliminadoPor?: number | null;
  }