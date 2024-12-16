import { LitElement, html, css } from 'lit';
import styles from '../styles/buttons.css';

class ButtonsElement extends LitElement {
  static styles = css([styles]);

  static properties = {
    playGame: { type: Boolean },
  }

  constructor() {
    super();
    this.playGame = false;
  }

  toggleGame() {
    const event = new CustomEvent('update-game', {
      detail: { playGame: !this.playGame },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  goToHome() {
    const event = new CustomEvent('game-exit', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <p>${this.playGame ? "Click 'Stop' to GAME OVER!" : "Click 'Play' to start!"}</p>
      <button type="button" class="btn-stop-play" @click="${this.toggleGame}">
        ${this.playGame ? 'Stop' : 'Play'}
      </button>
      <button type="button" class="btn-home" @click="${this.goToHome}">Exit</button>
    `;
  }

}

customElements.define('buttons-element', ButtonsElement);