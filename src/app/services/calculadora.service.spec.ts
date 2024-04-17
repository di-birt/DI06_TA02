import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Mediante un espía controlamos el método sumarService
  //Como estamos espiando el método sumarService, no se ejecutará su lógica
  //Se espera que el método sumarService reciba los parámetros númericos 2 y 3
  it('debería llamar correctamente al método sumarService', () => {
    spyOn(service, 'sumarService');
    service.sumarService(2, 3);
    expect(service.sumarService).toHaveBeenCalledWith(2,3);
  });

  it('La lógica del método sumarService debería devolver 5', () => {
    const resultado = service.sumarService(2, 3);
    expect(resultado).toBe(5);
  });

  it('sumarService2 debería devolver 5', () => {
    //Simulamos que sumarService2 devuelve 5
    spyOn(service, 'sumarService2').and.returnValue(5);
    //Ejecutamos el método pero no su lógica, no hace caso al 4 y 3
    const resultado = service.sumarService2(4, 3);
    //Como devolvemos 5 esperamos que el resultado sea 5
    expect(resultado).toBe(5);
  });

  //Este método dará error, porque llamamos la método sumarService2, pero al no ejecutar su lógica el resultado devuelto será undefined.
  // it('sumarService2 debería devolver 7 - con error', () => {
  //   //Simulamos que sumarService2 devuelve 7
  //   spyOn(service, 'sumarService2');
  //   //Ejecutamos el método pero no su lógica, no hace caso al 4 y 3
  //   const resultado = service.sumarService2(4, 3);
  //   //Como no devuelve nada el método, nos dará error
  //   expect(resultado).toBe(7);
  // });

  //Este método ejecutará la lógica del método sumarService2.
  it('sumarService2 debería devolver 7 - con el error corregido', () => {
    //Si hacemos uso de un espía y queremos ejecutar la lógica, necesitamos añadir .and.callThrough()
    //spyOn(service, 'sumarService2').and.callThrough();
    //Para ejecutar la lógica, si no necesitamos espías, también podemos llamar directamente al método
    const resultado = service.sumarService2(4, 3);
    //Como no devuelve nada el método, nos dará error
    expect(resultado).toBe(7);
  });
});
