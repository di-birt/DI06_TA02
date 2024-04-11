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

  it('debería llamar correctamente al método sumarService', () => {
    spyOn(service, 'sumarService');
    service.sumarService(2,3);
    expect(service.sumarService).toHaveBeenCalledWith(2,3);
  });

  it('debería sumar dos números correctamente', () => {
    spyOn(service, 'sumarService').and.callThrough();
    const resultado = service.sumarService(2, 3);
    expect(resultado).toBe(5);
  });

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

  it('debería lanzar un error al intentar dividir por cero', () => {
    expect(() => service.dividirService(6, 0)).toThrowError('No se puede dividir por cero');
  });
});
