import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-checkbox/paper-checkbox.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-tabs/paper-tab";
import "@polymer/iron-collapse/iron-collapse";
import { titleize } from "../_utils/string";
import { SIDE_NAV_LINKS } from "../navigation/constants";

class NavLinks extends PolymerElement {
  $: any;
  static get navStyles() {
    return html`
      <style>
        h2 {
          padding: 8px;
          margin: 8px 0 0;
          color: #222222;
          font-size: 16px;
          text-transform: capitalize;
        }
        .link {
          display: block;
          text-decoration: none;
          font-size: 14px;
          padding: 6px 8px 6px 18px;
          color: var(--app-secondary-color);
        }
        .link:hover {
          background: #f5f5f5;
          border-left: 4px solid #0568ae;
        }
        .side-nav {
          margin: 0 8px 8px 8px;
        }
        .active-link {
          border-left: 4px solid #0568ae;
        }
      </style>
    `;
  }

  static get is() {
    return "nav-links";
  }

  static get properties() {
    return {
      linkName: String,
      name: {
        type: String,
        computed: "titleizePageName(linkName)"
      },
      pages: {
        type: Array,
        computed: "setPages(linkName)"
      }
    };
  }

  titleizePageName(page: string) {
    return titleize(page);
  }

  setPages(linkName: string) {
    return SIDE_NAV_LINKS[linkName];
  }

  toggleCollapse(e: any) {
    this.$.collapse.toggle();
  }

  static get template() {
    return html`
      ${this.navStyles}
      <div class="side-nav">
        <h2>
          <paper-button on-tap="toggleCollapse">
            <span>[[name]]</span>
            <!--<iron-icon icon="expand-more"></iron-icon>-->
          </paper-button>
        </h2>
        <iron-collapse id="collapse">
           <div class="content">
              <template is="dom-repeat" items="{{pages}}">
                <a
                  class="link"
                  href="[[item.routeName]]"
                  name="[[item.routeName]]"
                >
                  <iron-icon icon="[[item.icon]]"></iron-icon>
                  [[item.title]]
                </a>
              </template>
             </div>
          </iron-collapse>
      </div>
    `;
  }
}

window.customElements.define(NavLinks.is, NavLinks);
