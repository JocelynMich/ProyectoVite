export interface User {
    ID_Usuario: number;
    Nombre: string;
    FechaCreacion: Date;
    fk_CreadoPor?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }