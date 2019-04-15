import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '../_widgets/page-header';
import { loginSubmit } from './services';
import styles from './styles.scss';

export class LoginPage extends PolymerElement {
  username: string;
  password: string;

  static get is() {
    return 'login-page';
  }

  static get properties() {
    return {
      username: String,
      password: String
    };
  }

  onSubmit() {
    loginSubmit(this.username, this.password);
  }

  static get template() {
    return html([`
      <style>${styles}</style>
      <section>
        <page-header title="Login"></page-header>
        <div class="login-container">
          <div>
            <img
              src="//app-layout-assets.appspot.com/assets/landing-page/berries.jpg"
            />
          </div>
          <div class="login-form">
            <h5>LTM Application Entrance - Please enter credentials</h5>
            <paper-input
              always-float-label
              label="Username"
              value="{{username}}"
            ></paper-input>
            <paper-input
              type="password"
              always-float-label
              label="Password"
              value="{{password}}"
            ></paper-input>
            <paper-button on-click="onSubmit" raised class="custom indigo"
              >Submit</paper-button
            >
          </div>
        </div>
      </section>
    `]);
  }
}

window.customElements.define(LoginPage.is, LoginPage);
