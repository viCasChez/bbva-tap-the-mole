import { LitElement, html, css } from 'lit';
import styles from '../styles/levels.css';

class LevelsElement extends LitElement {
  static styles = css([styles]);

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

}

customElements.define('levels-element', LevelsElement);