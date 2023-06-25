export interface Orden {
    id: number;
    idCliente: number;
    //nombre del cliente aumentar
    idLibro: number;
    //nombre del libro
    cantidad: number;
    precioUnitario: number;//obtener del precio del libro
    totalVenta: number;
    fechaEmision: Date;
    //fecha creacion aumentar
    //fecha moficacion aumentr
  }