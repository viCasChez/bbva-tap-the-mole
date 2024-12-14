import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import '../src/components/Game';

describe('Game', () => {
  let gameElement;

  beforeEach(() => {
    gameElement = document.createElement('game-view');
    document.body.appendChild(gameElement);
  });

  afterEach(() => {
    document.body.removeChild(gameElement);
  });

  it('renders grid with holes', () => {
    const holes = gameElement.shadowRoot.querySelectorAll('.hole');
    expect(holes.length).toBe(9);
  });

  it('emits "update-points" event when a mole is clicked', async () => {
    const spy = vi.spyOn(gameElement, 'dispatchEvent');
  
    gameElement.holeSelected = 0;
    await gameElement.updateComplete;
  
    const mole = gameElement.shadowRoot.querySelector('.hole.selected mole-element');
    expect(mole).not.toBeNull();
  
    fireEvent.click(mole);
  
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ type: 'update-points' }));
  });
});