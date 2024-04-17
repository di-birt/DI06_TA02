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

  // //Comprobamos que los valores se inicializan con esos valores. 
  // //Si intentamos poner por ejemplo toBe(10), nos dará error, ya que, los estamos inicializando con esos valores.
  // it('debería inicializar correctamente las propiedades', () => {
  //   expect(component.numero1).toBe(0);
  //   expect(component.numero2).toBe(0);
  //   expect(component.resultado).toBe(0);
  //   expect(component.mensaje).toBe('');
  // });

  // //Espiamos sumarService y ejecutamos la lógica de sumar.
  // //Se espera que sumarService reciba los números 2 y 3 como parámetros
  // it('debería llamar al método sumarService correctamente con 2 números desde el componente', () => {
  //   spyOn(calculadoraService, 'sumarService');
  //   component.sumar(2,3);
  //   expect(calculadoraService.sumarService).toHaveBeenCalledWith(2, 3);
  // });

  // //Espiamos el método sumar, por tanto, no ejecutará la lógica de ese método.
  // //Se espera que sumar reciba los números 2 y 3 como parámetros
  // it('debería llamar al método sumarTest correctamente con 2 números', () => {
  //   spyOn(component, 'sumarTest').and.callThrough().and.returnValue(5);
  //   component.sumarTest(2,3);
  //   expect(component.sumarTest).toHaveBeenCalledWith(2, 3);
  // });

  // //Espiamos el método sumar, por tanto, no ejecutará la lógica de ese método.
  // //Se espera que sumar reciba los números 2 y 3 como parámetros
  // it('debería llamar al método sumar correctamente con 2 números', () => {
  //   spyOn(component, 'sumar');
  //   component.sumar(2,3);
  //   expect(component.sumar).toHaveBeenCalledWith(2, 3);
  // });

  // //Ejecutamos directamente la lógica del método sumar.
  // //Si queremos ejecutar la lógica con un espía, necesitaremos añadirle '.and.callThrowugh()'
  // //Esperamos que la suma entre 2 y 3 devuelva 5
  // it('debería sumar dos números correctamente', () => {
  //   //spyOn(component, 'sumar').and.callThrough();
  //   component.sumar(2, 3);
  //   expect(component.resultado).toBe(5);
  // });

  // //Ejecutamos la lógica del método sumar mediante un espía.
  // //Para ello al espía le añadiremos '.and.callThrowugh()'
  // //Esperamos que la resta entre 5 y 3 devuelva 2
  // it('debería restar dos números correctamente', () => {
  //   spyOn(component, 'restar').and.callThrough();
  //   component.restar(5, 3);
  //   expect(component.resultado).toBe(2);
  // });

  // //Si queremos forzar que la simulación nos devuelva un valor que queramos.
  // //Podemos hacerlo mediante '.and.returnValue(valor)'
  // //En este caso estamos espiando el método multiplicarService, por tanto, el método multiplicar se ejecutará, pero multiplicarService no.
  // it('debería multiplicar dos números correctamente', () => {
  //   spyOn(calculadoraService, 'multiplicarService').and.returnValue(6);
  //   //Se ejecutará la lógica de este método, pero aunque hagamos 5*3, le hemos forzado que el valor devuelto por multiplicarService sea 6.
  //   component.multiplicar(5, 3);
  //   expect(component.resultado).toBe(6);
  // });

  // it('debería dividir dos números correctamente', () => {
  //   spyOn(calculadoraService, 'dividirService').and.returnValue(2);
  //   component.dividir(6, 3);
  //   expect(component.resultado).toBe(2);
  // });

  // //En dividirService controlamos que si el segundo valor es 0, el espía nos lance una excepción.
  // //Para ello haremos uso de ".and.throwError('texto del error')"
  // it('debería manejar correctamente la excepción al dividir por cero', () => {
  //   spyOn(calculadoraService, 'dividirService').and.throwError('No se puede dividir por cero');
  //   component.dividir(6, 0);
  //   //Esperamos que el resultado sea un número
  //   expect(component.resultado).toBeNaN();
  //   //Esperamos que el mensaje recibido sea la siguiente
  //   expect(component.mensaje).toBe('No se puede dividir por cero');
  // });

  // it('debería verificar si un número es válido', () => {
  //   expect(component.esNumeroValido(5)).toBeTrue();
  //   expect(component.esNumeroValido(NaN)).toBeFalse();
  //   expect(component.esNumeroValido('unTexto')).toBeFalse();
  // });
});
