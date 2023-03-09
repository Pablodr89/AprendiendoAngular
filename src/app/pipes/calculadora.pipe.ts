import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  //dato | calculadora: otro dato
  //param1      param2
  transform(value: any, valueTwo: any) {
      let operaciones = `
        Suma: ${value + valueTwo}
        Resta: ${value - valueTwo}
        Multiplicacion: ${value * valueTwo}
        Division: ${value / valueTwo}
      `
      return operaciones
  }
}
