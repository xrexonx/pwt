import { loginTemplate } from './loginTemplate';
import { PolymerElement } from '@polymer/polymer/polymer-element';

export class LoginPage extends PolymerElement {
  static get properties() {
    return {
      sample: {
        type: String,
        observer: 'observeMe'
      }
    };
  }

  static get template() {
    return loginTemplate;
  }

  observeMe() {
    // console.log('asdasdasdasd', this.sample);
  }
}

customElements.define('login-page', LoginPage);
