import {
  LitElement,
  html,
  css,
  property,
  customElement,
  TemplateResult
} from 'lit-element';

@customElement('page-header')
export class PageHeader extends LitElement {

  @property() icon: string;
  @property() title: string;

  static get styles() {
    return css`
      app-header {
        color: #fff;
        background-color: #0568ae;
      }
      app-toolbar {
        height: 50px;
        font-size: 16px;
      }
    `;
  }

  render(): TemplateResult  {
    return html`
      <app-header slot="header" reveals effects="waterfall">
        <app-toolbar>
          <div main-title>${this.title}</div>
          <paper-icon-button icon="${this.icon || ''}"></paper-icon-button>
        </app-toolbar>
      </app-header>
    `;
  }
}