import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";
import "../_widgets/page-header";
import { loginSubmit } from "./services";
import styles from "./styles.scss";

// import "@ovp/dfw-login/dfw-login";

export class LoginPage extends PolymerElement {
  username: string;
  password: string;

  static get is() {
    return "login-page";
  }

  static get properties() {
    return {
      username: String,
      password: String,
    };
  }

  onSubmit() {
    // loginSubmit(this.username, this.password);
    this.$.postLogin.url = "https://reqres.in/api/login";
    this.$.postLogin.body = { email: this.username, password: this.password };
    this.$.postLogin.generateRequest();
  }

  handleLoginResponse(data: any) {
    const response = JSON.parse(data.detail.response);
    // console.log({ response });
    // if (response.id_token) {
    //   this.error = '';
    //   this.storedUser = {
    //     name: this.formData.username,
    //     id_token: response.id_token,
    //     access_token: response.access_token,
    //     loggedin: true
    //   };
    //   // redirect to Secret Quotes
    //   this.set('route.path', '/secret-quotes');
    // }
    // // reset form data
    // this.formData = {};
  }
  handleLoginError(event: any) {
    // console.log(event.detail.request.xhr.response);
    // this.error = event.detail.request.xhr.response;
  }

  static get template() {
    return html([
      `
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
        <iron-ajax
          id="postLogin"
          method="post"
          content-type="application/json"
          handle-as="text"
          on-response="handleLoginResponse"
          on-error="handleLoginError">
        </iron-ajax>
      </section>
    `,
    ]);
  }
}

window.customElements.define(LoginPage.is, LoginPage);
