import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/iron-selector/iron-selector.js";
import "@polymer/paper-checkbox/paper-checkbox.js";
import { LTM_PAGES } from "./constants";
import "../_widgets/nav-links";

class SideNav extends PolymerElement {
  static get properties() {
    return {
      user: { type: String },
      page: { type: String },
      pages: {
        type: Array,
        value: LTM_PAGES
      }
    };
  }

  static get is() {
    return "side-nav";
  }

  static get template() {
    return html`
      <style>
        app-toolbar {
          color: #000;
          border: 3px solid #eee;
        }
        section {
          height: 100vh;
          overflow-y: auto;
        }
      </style>
      <app-toolbar reveals fixed>
        <iron-icon icon="account-circle"></iron-icon> &nbsp; [[user]]
      </app-toolbar>
      <section>
        <iron-selector
          selected="{{page}}"
          attr-for-selected="name"
          role="navigation"
        >
        <template is="dom-repeat" items="{{pages}}">
          <nav-links link-name="{{item}}"></nav-links>
        </template>
        </iron-selector>
      </section>
    `;
  }
}

customElements.define(SideNav.is, SideNav);
