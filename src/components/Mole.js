import { LitElement, html, css } from 'lit';

class MoleElement extends LitElement {
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

  static styles = css`
    :host {
      position: absolute;
      bottom: 0px;
      left: 9px;
    }

    .mole {
      position: relative;
    }

    .head {
      position: relative;
      width: 56px;
      height: 56px;
      border-radius: 50% 50% 0 0;
      margin: 0 auto;
      z-index: 1;
      border: 3px solid #000;
      background-color: #8b4513;
    }

    .eye {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #000;
      border-radius: 50%;
      top: 30%;
    }

    .eye.left {
      left: 20%;
    }

    .eye.right {
      right: 20%;
    }

    .nose {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #000;
      top: 54%;
      left: 50%;
      transform: translateX(-50%);
    }
  `;

}

customElements.define('mole-element', MoleElement);