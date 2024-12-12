import { LitElement, html, css } from 'lit';

class ButtonsElement extends LitElement {
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

  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 30px;
      justify-content: center;
      margin: 20px 0;
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button.btn-home, button.btn-stop-play {
      width: 90px;
    }

    button.btn-home {
      background-color: #cd5c5c;
      margin-left: 16px;
    }
  `;

}

customElements.define('buttons-element', ButtonsElement);