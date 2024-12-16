import { LitElement, html, css } from 'lit';
import styles from '../styles/header.css';

class HeaderElement extends LitElement {
  static styles = css([styles]);

  static properties = {
    name: { type: String },
    points: { type: Number },
  }

  constructor() {
    super();
    this.name = '';
    this.points = [];
  }

  render() {
    return html`
      <h1>Welcome, ${this.name}!!!</h1>
      <p>Points: <span>${this.points}</span></p>
    `;
  }

}

customElements.define('header-game', HeaderElement);