import { Component, NgModule } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  mensaje: string = "";

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit() {}

  sumar(a: number, b: number): void {
    this.resultado = this.calculadoraService.sumar(a, b);
  }

  restar(a: number, b: number): void {
    this.resultado = this.calculadoraService.restar(a, b);
  }

  multiplicar(a: number, b: number): void {
    this.resultado = this.calculadoraService.multiplicar(a, b);
  }

  dividir(a: number, b: number): void {
    try {
      this.resultado = this.calculadoraService.dividir(a, b);
    } catch (error: any) {
      //console.error(error.message);
      this.resultado = NaN;
      this.mensaje = error.message;
    }
  }

  esNumeroValido(num: any): boolean {
    return typeof num === 'number' && !isNaN(num);
  }

}

