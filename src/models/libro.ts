export interface Libro {
    id: number;
    titulo: string;
    autor: string;
    fechaPublicacion: Date;
    editorial: string;
    idioma: string;
    isbn: string;
    url: string;    
    numeroPaginas: number;
    precio: number;
    stock: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    //tamañoArchivo: string; borrar

  }