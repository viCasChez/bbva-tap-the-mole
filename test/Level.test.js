import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import '../src/components/Levels.js';

describe('LevelsElement', () => {
  let levelsElement;

  beforeEach(() => {
    levelsElement = document.createElement('levels-element');
    levelsElement.buttonLevels = [
      { text: 'Low', class: 'low' },
      { text: 'Medium', class: 'medium' },
      { text: 'High', class: 'high' },
    ];
    document.body.appendChild(levelsElement);
  });

  afterEach(() => {
    document.body.removeChild(levelsElement);
  });

  it('renders all level buttons', () => {
    const buttons = levelsElement.shadowRoot.querySelectorAll('button');
    expect(buttons.length).toBe(3);

    expect(buttons[0].textContent).toContain('Low');
    expect(buttons[1].textContent).toContain('Medium');
    expect(buttons[2].textContent).toContain('High');
  });

  it('emits "update-level" event with correct level index', () => {
    const spy = vi.spyOn(levelsElement, 'dispatchEvent');
    const mediumButton = levelsElement.shadowRoot.querySelector('button[data-index="1"]');

    fireEvent.click(mediumButton);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'update-level',
        detail: { level: 1 },
      })
    );
  });
});