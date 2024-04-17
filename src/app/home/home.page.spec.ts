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

  //Comprobamos que los valores se inicializan con esos valores. 
  //Si intentamos poner por ejemplo toBe(10), nos dará error, ya que, los estamos inicializando con esos valores.
  it('debería inicializar correctamente las propiedades', () => {
    expect(component.numero1).toBe(0);
    expect(component.numero2).toBe(0);
    expect(component.resultado).toBe(0);
    expect(component.mensaje).toBe('');
  });

  //Espiamos sumarService y ejecutamos la lógica de sumar.
  //Se espera que sumarService reciba los números 2 y 3 como parámetros
  it('Mediante un espía que vigila el método sumarService y sin ejecutar su lógica, debería realizar la llamada al método sumarService correctamente con los números 2 y 3 desde el método sumar del componente Home', () => {
    spyOn(calculadoraService, 'sumarService');
    component.sumar(2,3);
    expect(calculadoraService.sumarService).toHaveBeenCalledWith(2, 3);
  });

  // //Espiamos el método sumar, por tanto, no ejecutará la lógica de ese método.
  // //Se espera que sumar reciba los números 2 y 3 como parámetros
  // it('debería llamar al método sumarTest correctamente con 2 números', () => {
  //   spyOn(component, 'sumarTest').and.callThrough().and.returnValue(5);
  //   component.sumarTest(2,3);
  //   expect(component.sumarTest).toHaveBeenCalledWith(2, 3);
  // });

  //Ejecutamos la lógica de sumarTest, sumará +3 a los dos números que pasamos como parámetro.
  it('Debería ejectuar la lógica del método sumarTest correctamente con 2 números', () => {
    //En este caso, para cambiar, ejecutamos la lógica con un espía
    spyOn(component, 'sumarTest').and.callThrough();
    //Tenemos que recoger el return que realiza el método
    const resultado = component.sumarTest(2,3);
    //El resultado esperamos que sea 8. 
    //Si no recogemos el return en el resultado, el test daría error.
    expect(resultado).toBe(8);
  });


  //Espiamos el método sumar, por tanto, no ejecutará la lógica de ese método.
  //Se espera que sumar reciba los números 2 y 3 como parámetros
  it('Controlamos mediante un espía que debería llamar al método sumar correctamente con los números 2 y 3', () => {
    spyOn(component, 'sumar');
    component.sumar(2,3);
    expect(component.sumar).toHaveBeenCalledWith(2, 3);
  });

  //Ejecutamos directamente la lógica del método sumar.
  //Si queremos ejecutar la lógica con un espía, necesitaremos añadirle '.and.callThrowugh()'
  //Esperamos que la suma entre 2 y 3 devuelva 5
  //resultado es un atributo del componente Home y es ahí donde guardamos el resultado
  it('Ejecutando la lógica del método sumar, debería sumar dos números correctamente', () => {
    //spyOn(component, 'sumar').and.callThrough();
    component.sumar(2, 3);
    expect(component.resultado).toBe(5);
  });

  //Ejecutamos la lógica del método sumar mediante un espía.
  //Para ello al espía le añadiremos '.and.callThrowugh()' --> También podemos quitar el espía y llamar al método directamente
  //Esperamos que la resta entre 5 y 3 devuelva 2
  it('Ejecutando la lógica mediante un espía, debería restar dos números correctamente', () => {
    spyOn(component, 'restar').and.callThrough();
    component.restar(5, 3);
    //En este caso restar no realiza un return, sino que guarda el valor en el atributo "resultado" del componente Home, por tanto podemos poner component.resultado en el expect.
    expect(component.resultado).toBe(2);
  });

  //Si queremos forzar que la simulación nos devuelva un valor que queramos.
  //Podemos hacerlo mediante '.and.returnValue(valor)'
  //En este caso estamos espiando el método multiplicarService, por tanto, el método multiplicar se ejecutará, pero multiplicarService no.
  it('Comprobamos que podemos llamar al método mutiplicarService y simulamos que devuelve un valor', () => {
    spyOn(calculadoraService, 'multiplicarService').and.returnValue(6);
    //Se ejecutará la lógica de este método, pero aunque hagamos 5*3, le hemos forzado que el valor devuelto por multiplicarService sea 6.
    component.multiplicar(5, 3);
    expect(component.resultado).toBe(6);
  });

  //Ejecutamos la lógica del método multiplicar del componente y este llamará a la lógica del multiplicarService
  it('Ejecutamos la lógica del método mutiplicarService y debería multiplica correctamente dos números', () => {
    component.multiplicar(5, 3);
    expect(component.resultado).toBe(15);
  });

  //Comprobamos a ver si podemos llamar al método dividirService y simulamos su return
  it('Comprobamos a ver si podemos llamara al método dividirService y simulamos que devuelve un valor numérico', () => {
    spyOn(calculadoraService, 'dividirService').and.returnValue(2);
    component.dividir(6, 3);
    expect(component.resultado).toBe(2);
  });

  //Ejecutamos la lógica del método dividir y este ejecutará la lógica de dividirService
  it('Ejecutamos la lógica de dividir y debería dividir dos números correctamente', () => {
    component.dividir(6, 3);
    expect(component.resultado).toBe(2);
  });

  //En dividirService controlamos que si el segundo valor es 0, el espía nos lance una excepción.
  //Para ello haremos uso de ".and.throwError('texto del error')"
  it('Comprobamos si podemos llamar a dividirService y mediante .and.throwError forzamos que el texto devuelto es "No se puede dividir por cero"', () => {
    spyOn(calculadoraService, 'dividirService').and.throwError('No se puede dividir por cero');
    component.dividir(6, 0);
    //Esperamos que el resultado sea un número
    expect(component.resultado).toBeNaN();
    //Esperamos que el mensaje recibido sea la siguiente
    expect(component.mensaje).toBe('No se puede dividir por cero');
  });

  //Ejecutamos la lógica de dividirService para ver si en caso de que el segundo valor sea 0, el método lance una excepción.
  //Para ello haremos uso de ".and.throwError('texto del error')"
  it('Ejecutamos la lógica de dividir y debería manejar correctamente la excepción al dividir por cero.', () => {
    component.dividir(6, 0);
    //Esperamos que el resultado sea un número
    expect(component.resultado).toBeNaN();
    //Esperamos que el mensaje recibido sea la siguiente
    expect(component.mensaje).toBe('No se puede dividir por cero');
  });

  it('Debería verificar si un número es válido', () => {
    expect(component.esNumeroValido(5)).toBeTrue();
    expect(component.esNumeroValido(NaN)).toBeFalse();
    expect(component.esNumeroValido('unTexto')).toBeFalse();
  });
});
