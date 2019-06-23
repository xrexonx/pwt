import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/iron-icons/iron-icons.js";

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
          color: #222;
          /*background-color: #0568ae;*/
        }
        app-toolbar {
          height: 50px;
          font-size: 16px;
        }
      </style>
      <app-header slot="header" reveals effects="waterfall">
        <app-toolbar>
          <div main-title>[[title]]</div>
          <slot name="actions"></slot>
        </app-toolbar>
      </app-header>
    `;
  }
}

customElements.define(PageHeader.is, PageHeader);
