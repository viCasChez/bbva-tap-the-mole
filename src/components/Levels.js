import { LitElement, html, css } from 'lit';

class LevelsElement extends LitElement {
  static properties = {
    levelSelected: { type: Number },
    buttonLevels: { type: Array },
  }

  constructor() {
    super();
    this.levelSelected = 0; // Valor del nivel inicial - Low
    this.buttonLevels = [];
  }

  toggleLevel(ev) {
    const event = new CustomEvent('update-level', {
      detail: { level: parseInt(ev.target.dataset.index) },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event); // Emite el evento 'update-level' para notificar el cambio
  }

  render() {
    return html`
        <div class="grid">
          ${this.buttonLevels.map(
            (button, index) => {
              return html`<button 
                  type="button"
                  data-index="${index}"
                  class="${button.class} ${this.levelSelected === index ? "selected" : ''}"
                  @click="${this.toggleLevel}"
                >
                  ${button.text}
                </button>
              `
            }
          )}
        </div>
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

    .grid button {
      opacity: 0.5;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button.low {
      background-color: #9acd32;
      border: 3px solid #9acd32;
    }
    button.medium {
      background-color: #ffa500;
      border: 3px solid #ffa500;
    }
    button.high {
      background-color: #cd5c5c;
      border: 3px solid #cd5c5c;
    }

    .grid button:hover, button.selected {
      border: 3px solid #000;
      opacity: 1;
    }
  `;

}

customElements.define('levels-element', LevelsElement);