import {
  LitElement,
  html,
  css,
  TemplateResult,
  property,
  customElement
} from 'lit-element';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-checkbox/paper-checkbox';
import '../_widgets/nav-links';
import { LTM_PAGES } from './constants';

@customElement('side-nav')
class SideNav extends LitElement {
  @property() user: string;

  static get is() {
    return 'side-nav';
  }

  static get styles() {
    return css`
      app-toolbar {
        color: #fff;
        background-color: #0568ae;
      }
      section {
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        height: 100vh;
        overflow-y: auto;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <app-toolbar reveals fixed>
        <iron-icon icon="account-circle"></iron-icon> &nbsp; ${this.user}
      </app-toolbar>
      <section>
        <iron-selector
          selected="{{page}}"
          attr-for-selected="name"
          role="navigation"
        >
          ${LTM_PAGES.map(
            (item: string) =>
              html`
                <nav-links name="${item}"></nav-links>
              `
          )}
        </iron-selector>
      </section>
    `;
  }
}