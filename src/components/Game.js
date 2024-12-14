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
    console.log(`👽 [vi... ${Date.now()}]: texto`, this.secondsWait);
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
      transition: background-color 500ms ease;
    }

    .hole.success {
      background-color: #9acd32;
      animation: success-animation 1000ms ease forwards;
    }

    .hole.fail {
      background-color: #cd5c5c;
      animation: fail-animation 1000ms ease forwards;
    }

    mole-element {
      display: none;
    }

    .hole.selected mole-element {
      display: block;
    }
  
    @keyframes success-animation {
      0% {
        background-color: #9acd32;
      }
      100% {
        background-color: #a9a9a9;
      }
    }

    @keyframes fail-animation {
      0% {
        background-color: #cd5c5c;
      }
      100% {
        background-color: #a9a9a9;
      }
    }
  `;
}

customElements.define('game-view', Game);