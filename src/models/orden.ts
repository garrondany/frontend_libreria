export interface Orden {
    id: number;
    idCliente: number;
    idLibro: number;
    cantidad: number;
    precioUnitario: number;//obtener del precio del libro
    totalVenta: number;
    fechaEmision: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
  }