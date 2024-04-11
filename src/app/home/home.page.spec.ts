import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CalculadoraService } from '../services/calculadora.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  //Declaramos el servicio que usaremos desde el componente.
  let calculadoraService: CalculadoraService;

  //Añadimos el servicio como providers y lo inyectamos mediante TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [CalculadoraService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Comprobamos que los valores se inicializan con esos valores. Si intentamos poner por ejemplo toBe(10), nos dará error, ya que, los estamos inicializando con esos valores.
  it('debería inicializar correctamente las propiedades', () => {
    expect(component.numero1).toBe(0);
    expect(component.numero2).toBe(0);
    expect(component.resultado).toBe(0);
    expect(component.mensaje).toBe('');
  });

  it('debería llamar al método sumarService correctamente con 2 números desde el componente', () => {
    spyOn(calculadoraService, 'sumarService');
    component.sumar(2,3);
    expect(calculadoraService.sumarService).toHaveBeenCalledWith(2, 3);
  });

  it('debería llamar al método sumar correctamente con 2 números', () => {
    spyOn(component, 'sumar');
    component.sumar(2,3);
    expect(component.sumar).toHaveBeenCalledWith(2, 3);
  });

  
  it('debería sumar dos números correctamente', () => {
    //spyOn(component, 'sumar').and.callThrough();
    component.sumar(2, 3);
    expect(component.resultado).toBe(5);
  });

  it('debería restar dos números correctamente', () => {
    spyOn(component, 'restar').and.callThrough();
    component.restar(5, 3);
    expect(component.resultado).toBe(2);
  });

  it('debería multiplicar dos números correctamente', () => {
    spyOn(calculadoraService, 'multiplicarService').and.returnValue(6);
    component.multiplicar(2, 3);
    expect(component.resultado).toBe(6);
  });

  it('debería dividir dos números correctamente', () => {
    spyOn(calculadoraService, 'dividirService').and.returnValue(2);
    component.dividir(6, 3);
    expect(component.resultado).toBe(2);
  });

  it('debería manejar correctamente la excepción al dividir por cero', () => {
    spyOn(calculadoraService, 'dividirService').and.throwError('No se puede dividir por cero');
    component.dividir(6, 0);
    expect(component.resultado).toBeNaN();
    expect(component.mensaje).toBe('No se puede dividir por cero');
  });

  it('debería verificar si un número es válido', () => {
    expect(component.esNumeroValido(5)).toBeTrue();
    expect(component.esNumeroValido(NaN)).toBeFalse();
    expect(component.esNumeroValido('unTexto')).toBeFalse();
  });
});
