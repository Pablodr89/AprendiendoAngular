import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaServie {
  public zapatillas: Array<Zapatilla>

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nano X3', 'Reebok', 'Naranja', 80, true),
      new Zapatilla('Metcon 8', 'Nike', 'Rojo', 149.99, true),
      new Zapatilla('Lifter Legacy', 'Reebok', 'Negro', 200.00, true),
      new Zapatilla('Romaleos', 'Nike', 'Rojo', 99.99, false),
      new Zapatilla('Run Falcon', 'Adidas', 'Negro', 79.99, true),
      new Zapatilla('608', 'New Balance', 'Blanco', 49.99, false)
    ]
  }

  getTexto() {
    return 'Zapatillas desde un servicio'
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas
  }
}
