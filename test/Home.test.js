import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import { HomeForm } from '../src/components/Home';

describe('Home Component', () => {
  let homeElement;

  beforeEach(() => {
    // Crea una instancia del componente antes de cada prueba
    homeElement = new HomeForm();
    document.body.appendChild(homeElement);
  });

  afterEach(() => {
    // Limpia el DOM después de cada prueba
    document.body.removeChild(homeElement);
  });

  it('renders correctly', () => {
    // Comprueba que el componente se renderiza correctamente
    const title = homeElement.shadowRoot.querySelector('h1');
    expect(title.textContent).toBe('Tap the Mole');

    const input = homeElement.shadowRoot.querySelector('input');
    expect(input).toBeTruthy();
    expect(input.placeholder).toBe('Enter your name');

    const button = homeElement.shadowRoot.querySelector('button');
    expect(button.textContent).toBe('JOIN');
  });

  it('handles input correctly', () => {
    const input = homeElement.shadowRoot.querySelector('input');
    fireEvent.input(input, { target: { value: 'John' } });

    expect(homeElement.name).toBe('John');
    expect(homeElement.errorMessage).toBe('');
  });

  it('submits valid names', () => {
    const input = homeElement.shadowRoot.querySelector('input');
    const button = homeElement.shadowRoot.querySelector('button');

    // Simula una entrada válida
    fireEvent.input(input, { target: { value: 'John' } });
    const eventSpy = vi.spyOn(homeElement, 'dispatchEvent');
    fireEvent.click(button);

    // Comprueba que el evento 'name-submitted' es emitido
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'name-submitted',
        detail: { name: 'John' },
      })
    );

    expect(homeElement.errorMessage).toBe('');
  });

  it('displays error message for empty name', async () => {
    
    // Simula el envío de un nombre en blanco
    homeElement.name = '';
    const button = homeElement.shadowRoot.querySelector('button');
    fireEvent.click(button);
  
    // Espera a que el componente se actualice
    await homeElement.updateComplete;
  
    // Comprueba que el mensaje de error se renderizó
    const errorMessage = homeElement.shadowRoot.querySelector('p');
    expect(errorMessage).not.toBeNull(); // Asegúrate de que existe el elemento <p>
    expect(errorMessage.textContent).toBe('Name cannot be empty');
  });


  it('displays error message for short name', async () => {
    // Simula el envío de un nombre inválido
    homeElement.name = 'Jo';
    const button = homeElement.shadowRoot.querySelector('button');
    fireEvent.click(button);
  
    // Espera a que el componente se actualice
    await homeElement.updateComplete;
  
    // Comprueba que el mensaje de error se renderizó
    const errorMessage = homeElement.shadowRoot.querySelector('p');
    expect(errorMessage).not.toBeNull(); // Asegúrate de que existe el elemento <p>
    expect(errorMessage.textContent).toBe('Please enter a valid name, minimum 3 characters');
  });

  it('clears error message on valid input', () => {
    const input = homeElement.shadowRoot.querySelector('input');
    const button = homeElement.shadowRoot.querySelector('button');

    // Simula un error inicial
    fireEvent.input(input, { target: { value: '' } });
    fireEvent.click(button);

    // Corrige la entrada
    fireEvent.input(input, { target: { value: 'John' } });

    // Comprueba que el mensaje de error desaparece
    expect(homeElement.errorMessage).toBe('');
    const errorMessage = homeElement.shadowRoot.querySelector('p');
    expect(errorMessage).toBeNull();
  });
});
