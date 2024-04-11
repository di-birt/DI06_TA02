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
    service.sumarService(2,3);
    expect(service.sumarService).toHaveBeenCalledWith(2,3);
  });

  //Mediante un espía y callThrough ejecutamos la lógica del método sumarService
  //El resultado esperado será 5
  it('debería sumar dos números correctamente', () => {
    spyOn(service, 'sumarService').and.callThrough();
    const resultado = service.sumarService(2, 3);
    expect(resultado).toBe(5);
  });

  //Ejecuta la lógica del método restarService sin espias.
  //El resultado esperado será 2
  it('debería restar dos números correctamente', () => {
    const resultado = service.restarService(5, 3);
    expect(resultado).toBe(2);
  });

  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicarService(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividirService(6, 3);
    expect(resultado).toBe(2);
  });

  //El método toThrowError de jasmine espera una función como argumento, por ello tendremos que añadir ()=> antes de la llamada al método.
  //Ejecutará la lógica del método dividirService y si el segundo número es 0, lanzará un Error que la recogeremos aquí.
  //Esperamos que el error sea el texto -> 'No se puede dividir por cero'
  it('debería lanzar un error al intentar dividir por cero', () => {
    expect(() => service.dividirService(6, 0)).toThrowError('No se puede dividir por cero');
  });
});
