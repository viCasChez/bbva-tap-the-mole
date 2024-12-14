import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import '../src/components/Buttons.js';

describe('ButtonsElement', () => {
  let buttonsElement;

  beforeEach(() => {
    buttonsElement = document.createElement('buttons-element');
    document.body.appendChild(buttonsElement);
  });

  afterEach(() => {
    document.body.removeChild(buttonsElement);
  });

  it('renders correctly', () => {
    const text = buttonsElement.shadowRoot.querySelector('p');
    expect(text.textContent).toBe("Click 'Play' to start!");

    const playButton = buttonsElement.shadowRoot.querySelector('.btn-stop-play');
    expect(playButton.textContent).toContain('Play');

    const exitButton = buttonsElement.shadowRoot.querySelector('.btn-home');
    expect(exitButton.textContent).toContain('Exit');
  });

  it('toggles playGame state and emits "update-game" event', () => {
    const spy = vi.spyOn(buttonsElement, 'dispatchEvent');
    const playButton = buttonsElement.shadowRoot.querySelector('.btn-stop-play');

    fireEvent.click(playButton);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'update-game',
        detail: { playGame: true },
      })
    );
  });

  it('emits "game-exit" event when exit button is clicked', () => {
    const spy = vi.spyOn(buttonsElement, 'dispatchEvent');
    const exitButton = buttonsElement.shadowRoot.querySelector('.btn-home');

    fireEvent.click(exitButton);

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ type: 'game-exit' }));
  });
});