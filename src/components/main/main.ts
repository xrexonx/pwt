import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";
import "../_widgets/page-header";
import "@polymer/paper-tabs/paper-tabs";
import "@polymer/paper-tabs/paper-tab";
// import {getPageUrl} from "../../_utils/string";

class DashboardPage extends PolymerElement {
  tabChanged(tab: string) {
    // console.log('tab', tab);
    // if (tab !== 'ltm') {
    //   import(getPageUrl(tab));
    // }
  }

  static get properties() {
    return {
      tab: {
        observer: "tabChanged",
        type: String,
      },
      tabData: Object,
    };
  }

  static get template() {
    return html`
      <style>
        paper-tabs {
          margin: 8px 10px 8px 10px;
          background-color: #0568ae;
          color: #fff;
        }
      </style>
      <section>
        <paper-tabs id="plain-tabs" selected="0">
          <paper-tab name="menu">
            Main Menu
          </paper-tab>
          <paper-tab name="reports">
            Reports
          </paper-tab>
          <paper-tab name="job-calendar">
            Job Calendar
          </paper-tab>
        </paper-tabs>
        <iron-pages
          role="main"
          class="flex"
          selected="[[tab]]"
          attr-for-selected="name"
        >
        </iron-pages>
      </section>
    `;
  }
}

customElements.define("dashboard-page", DashboardPage);
