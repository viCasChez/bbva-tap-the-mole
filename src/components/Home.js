import { LitElement, html, css } from 'lit';
import './Mole.js';

export class HomeForm extends LitElement {
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

  static styles = css`
    :host {
      display: block;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      color: #333;
    }

    img {
      width: 250px;
    }

    label { display: block; }

    label, input, button { 
      margin: 16px auto 0;
    }

    input { padding: 6px; }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    p {
      color: red;
      font-size: .8rem;
      margin-top: 8px;
    }

  `;

}

customElements.define('home-form', HomeForm);