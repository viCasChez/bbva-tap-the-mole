import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import '../src/components/Mole';

describe('MoleElement', () => {
  let moleElement;

  beforeEach(() => {
    moleElement = document.createElement('mole-element');
    document.body.appendChild(moleElement);
  });

  afterEach(() => {
    document.body.removeChild(moleElement);
  });

  it('renders correctly', () => {
    const head = moleElement.shadowRoot.querySelector('.head');
    expect(head).toBeTruthy();

    const eyes = moleElement.shadowRoot.querySelectorAll('.eye');
    expect(eyes.length).toBe(2);

    const nose = moleElement.shadowRoot.querySelector('.nose');
    expect(nose).toBeTruthy();
  });
});