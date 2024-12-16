import { LitElement, html, css } from 'lit';
import styles from '../styles/home.css';

export class HomeForm extends LitElement {
  static styles = css([styles]);

  static properties = {
    name: { type: String },
    errorMessage: { type: String },
  };

  constructor() {
    super();
    this.name = '';
    this.errorMessage = '';
  }

  handleInput(event) {
    this.name = event.target.value;
    this.errorMessage = '';
  }

  handleSubmit(event) {
    event.preventDefault(); 
    const name = this.name.trim();
    const nameValid = name.length >= 3;
    if (name && nameValid) {
      const event = new CustomEvent('name-submitted', {
        detail: { name: this.name.trim() },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
      this.errorMessage = '';
    } else {
      const nameEmpty = this.name.trim().length === 0
      this.name = '';
      this.errorMessage = nameEmpty ? 'Name cannot be empty' : 'Please enter a valid name, minimum 3 characters';
    }
  }

  render() {
    return html`
      <h1>Tap the Mole</h1>
      <img src="./img/mole.webp" alt="Tap the Mole" />
      <form @submit="${(e) => e.preventDefault()}">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          .value="${this.name}"
          @input="${this.handleInput}"
        />
        <button @click="${this.handleSubmit}">JOIN</button>
        ${this.errorMessage ? html`<p>${this.errorMessage}</p>` : ''}
      </form>
    `;
  }

}

customElements.define('home-form', HomeForm);