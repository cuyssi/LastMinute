export interface News {
    id: string;
    titulo: string;
    url: string;
    fecha: string;
    sentimiento?: string;
    imagen?: string;
    autor?: string[];
    resumen?: string;
    categoria?: string;
}