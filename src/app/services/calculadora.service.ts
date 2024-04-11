import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  sumarService(a: number, b: number): number {
    return a + b;
  }

  restarService(a: number, b: number): number {
    return a - b;
  }

  multiplicarService(a: number, b: number): number {
    return a * b;
  }

  dividirService(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }
}
