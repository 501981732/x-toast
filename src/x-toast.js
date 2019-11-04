// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

export class XToast extends LitElement {
  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  constructor() {
    super()
    this.open = false
    this.timer = null
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  updated(changedProperties) {
    console.log(changedProperties)
  }
  disconnectedCallback() {
    clearTimeout(this.timer)
 }
  render() {
    clearTimeout(this.timer)
    if (this.open) {
        this.timer = setTimeout(() => {
            this.open = false          
        }, 3000);
    } 

    return html`
      <style>
        // :host { display: block; }
        // :host([hidden]) { display: none; }
        :host {
        }
        span.open {
          opacity:1;
          visibility: visible;    
        }
        span {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity:0;
          background: rgba(0,0,0,.5);
          text-align: center;
          border-radius: 5px;
          display: inline-block;
          margin:0;
          color: #fff;
          font-size: 14px;
          padding: 2px 3px; 
          visibility: hidden;
          transition: all .8s;
        }
        </style>
      </style>
      <span class="${this.open ? 'open' : ''}"><slot></slot></span>
    `;
  }
}
// Register the element with the browser
customElements.define('x-toast', XToast);
