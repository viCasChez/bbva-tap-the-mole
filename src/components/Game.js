import { LitElement, html, css } from 'lit';
import styles from '../styles/game.css';
import './Mole.js';

class Game extends LitElement {
  static styles = css([styles]);

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
    this.holeStates = Array(9).fill(null);
  }

  eventUpdatePoints() {
    const event = new CustomEvent('update-points', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
    this.holeStates[this.holeSelected] = 'success';
    this.holeSelected = -1;
    if (navigator.vibrate) {
      navigator.vibrate(100); // Vibrar durante 100 ms
    }
  }

  startGame() {
    this.interval ? clearInterval(this.interval) : this.randomShowMole();
    this.interval = setInterval(this.randomShowMole.bind(this), this.secondsWait);
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
    if (this.playGame) {
      this.holeStates[this.holeSelected] = 'fail';
      this.holeSelected = this.getRandomMole();
    }
  }

  handleAnimationEnd() {
    this.holeStates = Array(9).fill(null);
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="grid grid-hole">
        ${Array.from({ length: 9 }).map(
          (_, index) =>
            html`<div
                  class="hole ${index === this.holeSelected ? 'selected' : ''} ${this.holeStates[index]}"
                  id="hole-${index}"
                  @animationend="${this.handleAnimationEnd}"
                >
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

}

customElements.define('game-view', Game);