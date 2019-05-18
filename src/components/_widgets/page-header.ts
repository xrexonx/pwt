import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class PageHeader extends PolymerElement {

  static get is() {
    return "page-header";
  }
  static get properties() {
    return {
      title: String,
      icon: String,
      iconClick: String
    };
  }
  static get template() {
    return html`
      <style>
        app-header {
          color: #fff;
          background-color: #0568ae;
        }
        app-toolbar {
          height: 50px;
          font-size: 16px;
        }
      </style>
      <app-header slot="header" reveals effects="waterfall">
        <app-toolbar>
          <div main-title>[[title]]</div>
          <paper-icon-button icon="[[icon]]"></paper-icon-button>
        </app-toolbar>
      </app-header>
    `;
  }
}

customElements.define(PageHeader.is, PageHeader);
