import { html, property, LitElement, TemplateResult } from 'lit-element';

import '../main/index';
// import '../login/login';

export class AppShell extends LitElement {
  @property() authenticated: boolean;

  static get is() {
    return 'app-shell';
  }

  render(): TemplateResult {
    // const { authenticated } = this;
    // console.log('authenticated', this.authenticated);

    // import(
    //   !this.authenticated
    //     ? '../main/index'
    //     : '../login/login'
    //   );

    return html`
      <main-page></main-page>
    `;

    // return !this.authenticated
    //   ? html`<main-page></main-page>`
    //   : html`<login-page></login-page>`;
  }
}
