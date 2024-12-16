import { LitElement, html, css } from 'lit';
import styles from '../styles/mole.css';

class MoleElement extends LitElement {
  static styles = css([styles]);

  render() {
    return html`
      <div class="mole">
        <div class="head">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="nose"></div>
        </div>
      </div>
    `;
  }

}

customElements.define('mole-element', MoleElement);