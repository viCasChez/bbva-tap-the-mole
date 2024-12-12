import { LitElement, html, css } from 'lit';
import './Mole.js';

class Game extends LitElement {
  static properties = {
    playGame: { type: Boolean },
    secondsWait: { type: Number },
    holeSelected: { type: Number },
  };

  constructor() {
    super();
    this.playGame = false;
    this.secondsWait = 500;
    this.holeSelected = -1;
  }

  eventUpdatePoints() {
    const event = new CustomEvent('update-points', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event); // Emite el evento 'update-points' para notificar el cambio
  }

  startGame() {
    this.interval ? clearInterval(this.interval) : this.randomShowMole();
    $:{this.interval = setInterval(this.randomShowMole.bind(this), this.secondsWait)};
  }

  stopGame() {
    clearInterval(this.interval);
    this.holeSelected = -1;
  }

  getRandomMole() {
    let randomMole = Math.floor(Math.random() * 9);
    if (randomMole === this.holeSelected) {
      randomMole = randomMole === 8 ? 0 : randomMole + 1;
    }
    return randomMole;
  }

  randomShowMole() {
    this.holeSelected = this.getRandomMole();
  }

  render() {
    return html`
      <div class="grid grid-hole">
        ${Array.from({ length: 9 }).map(
          (_, index) =>
            html`<div class="hole ${index === this.holeSelected ? 'selected' : ''}" id="hole-${index}">
                  <mole-element @click="${this.eventUpdatePoints}"></mole-element>
                </div>`
        )}
      </div>
    `;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (this.playGame) {
      this.startGame();
    } else {
      this.stopGame();
    }
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 30px;
      justify-content: center;
      margin: 20px 0;
    }

    .grid-hole {
      margin: 80px 0;
    }

    .hole {
      position: relative;
      width: calc(100% - 20px);
      height: 36px;
      border: 10px solid #000;
      border-radius: 50%;
      box-shadow: 2px 2px 6px 2px #999;
      background-color: #a9a9a9;
    }

    mole-element {
      display: none;
    }

    .hole.selected mole-element {
      display: block;
    }
  
  `;
}

customElements.define('game-view', Game);